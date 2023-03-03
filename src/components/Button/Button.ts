import './_button.scss';
import Block from '../../utils/Block';
import template from './Button.tmpl.hbs';

interface IButton {
	type?: string;
	className: string;
	text?: string;
	events?: {
		click: (e: Event) => void;
	};
}

export class Button extends Block<IButton> {
	constructor(props: IButton) {
		super({ type: 'button', ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
