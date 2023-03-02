import './_inputEdit.scss';
import template from './InputEdit.hbs';
import Block from '../../utils/Block';

interface IInputEdit {
	type?: string;
	name: string;
	label: string;
	placeholder: string | undefined;
	property?: string;
	classLabel?: string;
	classInput?: string;
	value?: string;
	events?: {}
}

export class InputEdit extends Block<IInputEdit> {
	constructor(props: IInputEdit) {
		super({ type: 'inputEdit', ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
