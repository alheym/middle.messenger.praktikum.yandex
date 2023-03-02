import template from './InputSearch.hbs';
import Block from '../../utils/Block';

interface IInputSearch {
	type?: string;
	name: string;
	label?: string;
	placeholder: string;
	classLabel?: string;
	classInput?: string;
	value?: string;
	events?: {};
}

export class InputSearch extends Block<IInputSearch> {
	constructor(props: IInputSearch) {
		super({ type: 'InputText', ...props });
	}

	clear() {
		this.setProps({ value: '' });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
