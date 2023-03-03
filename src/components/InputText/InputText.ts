import './_inputText.scss';
import template from './InputText.hbs';
import Block from '../../utils/Block';

interface IInputText {
	type?: string;
	name: string;
	label?: string;
	placeholder: string;
	classLabel?: string;
	classInput?: string;
	value?: string;
	events?: {};
}

export class InputText extends Block<IInputText> {
	constructor(props: IInputText) {
		super({ type: 'InputText', ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
