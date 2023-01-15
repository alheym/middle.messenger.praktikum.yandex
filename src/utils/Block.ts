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
	public children: Record<string, Block | Block[]>;

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
		this._registerEvents(eventBus);

		eventBus.emit(Block.EVENTS.INIT);
	}

	_getChildrenAndProps(childrenAndProps: Props): { props: Props, children: Record<string, Block | Block[]> } {
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

	_addEvents() {
		const { events = {} } = this.props as Props & { events: Record<string, () => void> };

		Object.keys(events).forEach(eventName => {
			this._element?.addEventListener(eventName, events[eventName]);
		});
	}

	_registerEvents(eventBus: EventBus) {
		eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	_init() {
		this.init();

		this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
	}

	init() {
	}

	_componentDidMount() {
		this.componentDidMount();
	}

	componentDidMount() {
	}

	dispatchComponentDidMount() {
		this.eventBus().emit(Block.EVENTS.FLOW_CDM);

		Object.values(this.children).forEach(child => {
			if (Array.isArray(child)) {
				child.forEach(ch => ch.dispatchComponentDidMount());
			} else {
				child.dispatchComponentDidMount();
			}
		});
	}

	_componentDidUpdate(oldProps: Props, newProps: Props) {
		if (this.componentDidUpdate(oldProps, newProps)) {
			this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
		}
	}

	componentDidUpdate(oldProps: Props, newProps: Props) {
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

	_render() {
		const fragment = this.render();

		const newElement = fragment.firstElementChild as HTMLElement;

		if (this._element && newElement) {
			this._element.replaceWith(newElement);
		}

		this._element = newElement;

		this._addEvents();
	}

	compile(template: (context: any) => string, context: any) {
		const contextAndStubs = { ...context };

		Object.entries(this.children).forEach(([name, component]) => {
			if (Array.isArray(component)) {
				contextAndStubs[name] = component.map(child => `<div data-id="${child.id}"></div>`)
			} else {
				contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
			}
		});

		const html = template(contextAndStubs);

		const temp = document.createElement('template');

		temp.innerHTML = html;

		const replaceStub = (component: Block) => {
			const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

			if (!stub) {
				return;
			}

			component.getContent()?.append(...Array.from(stub.childNodes));

			stub.replaceWith(component.getContent()!);
		}

		Object.entries(this.children).forEach(([_, component]) => {
			if (Array.isArray(component)) {
				component.forEach(replaceStub);
			} else {
				replaceStub(component);
			}
		});

		return temp.content;
	}

	render(): DocumentFragment {
		return new DocumentFragment();
	}

	getContent() {
		return this.element;
	}

	_makePropsProxy(props: Props) {

		return new Proxy(props, {
			get(target, prop: string) {
				const value = target[prop];
				return typeof value === 'function' ? value.bind(target) : value;
			},
			set(target, prop: string, value) {
				const oldTarget = { ...target }

				target[prop as keyof Props] = value;

				this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
				return true;
			},
			deleteProperty() {
				throw new Error('Нет доступа');
			}
		});
	}
}

export default Block;
