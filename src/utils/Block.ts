import { EventBus } from './EventBus';
import { nanoid } from 'nanoid'


class Block<Props extends Record<string, any> = any> {
	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render'
	} as const;



	public id = nanoid(6);
	public children: Record<string, any>;

	protected props: Props;

	private eventBus: () => EventBus;
	private _element: HTMLElement | null = null;

	/** JSDoc
	 * @param {string} tagName
	 * @param {Object} props
	 *
	 * @returns {void}
	 */

	constructor(propsWithChildren: Props) {

		const eventBus = new EventBus();
		const { props, children } = this._getChildrenAndProps(propsWithChildren);

		this.children = children;
		this.props = this._makePropsProxy(props);

		this.eventBus = () => eventBus;
		this.initChildren();
		this._registerEvents(eventBus);

		eventBus.emit(Block.EVENTS.INIT);
	}

	private _getChildrenAndProps(childrenAndProps: Props): { props: Props, children: Record<string, Block | Block[]> } {
		const props: Record<string, unknown> = {};
		const children: Record<string, Block | Block[]> = {};

		Object.entries(childrenAndProps).forEach(([key, value]) => {
			if (Array.isArray(value) && value.length > 0 && value.every(v => v instanceof Block)) {
				children[key as string] = value;
			} else if (value instanceof Block) {
				children[key as string] = value;
			} else {
				props[key] = value;
			}
		});

		return { props: props as Props, children };
	}

	private _addEvents() {
		const { events = {} } = this.props as Props & { events: Record<string, () => void> };

		Object.keys(events).forEach(eventName => {
			this._element?.addEventListener(eventName, events[eventName]);
		});
	}

	private _removeEvents(): void {
		const { events = {} } = this.props as { events?: Record<string, () => void> };
		Object.keys(events).forEach((eventName) => {
			this._element?.removeEventListener(eventName, events[eventName]);
		});
	}

	private _registerEvents(eventBus: EventBus) {
		eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	private _init() {
		this.init();

		this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
	}

	init() {
	}

	private _componentDidMount(): void {
		this.componentDidMount();
	}

	componentDidMount(): void {
	}

	dispatchComponentDidMount() {
		this.eventBus().emit(Block.EVENTS.FLOW_CDM);
	}

	private _componentDidUpdate(oldProps: Props, newProps: Props) {
		if (this.componentDidUpdate(oldProps, newProps)) {
			this._removeEvents();
			this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
		}
	}

	// @ts-ignore
	componentDidUpdate(oldProps?: Props, newProps?: Props) {
		return true;
	}

	setProps = (nextProps: Partial<Props>) => {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	};

	get element() {
		return this._element;
	}

	private _render() {
		this.initChildren();

		const fragment = this.render();

		const newElement = fragment.firstElementChild as HTMLElement;

		if (this._element) {
			this._element.replaceWith(newElement);
		}

		this._element = newElement;

		this._addEvents();
	}

	protected initChildren() { }

	render(): DocumentFragment {
		return new DocumentFragment();
	}

	protected compile(template: (context: any) => string, context: any) {
		const contextAndStubs = { ...context };

		Object.entries(this.children).forEach(
			([key, child]: [string, Block<Props>]) => {
				if (Array.isArray(child)) {
					contextAndStubs[key] = child.map(
						(item) => `<div data-id="${item.id}"></div>`
					);
					return;
				}
				contextAndStubs[key] = `<div data-id="${child.id}"></div>`;
			}
		);

		const temp = document.createElement("template");

		temp.innerHTML = template(contextAndStubs).split(",").join("");

		Object.values(this.children).forEach((child: Block<Props>) => {
			if (Array.isArray(child)) {
				child.map((item) => {
					const stub = temp.content.querySelector(`[data-id="${item.id}"]`);
					if (!stub) return;

					stub.replaceWith(item.getContent()!);
				});
				return;
			}
			const stub = temp.content.querySelector(
				`[data-id="${child.id}"]`
			) as HTMLElement;
			if (!stub) return;
			stub.replaceWith(child.getContent()!);
		});

		return temp.content;
	}

	getContent() {
		return this.element;
	}

	private _makePropsProxy(props: any) {
		return new Proxy(props, {
			get: (target, prop) => {
				const value = target[prop];
				return typeof value === "function" ? value.bind(target) : value;
			},
			set: (target, prop, value) => {
				target[prop] = value;

				this.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
				return true;
			},
			deleteProperty: () => {
				throw new Error("Нет доступа");
			},
		});
	}
}

export default Block;
