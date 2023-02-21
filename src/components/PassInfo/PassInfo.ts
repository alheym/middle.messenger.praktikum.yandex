import './_passInfo.scss';
import template from './PassInfo.hbs';
import Block from '../../utils/Block';


interface IPassInfo {
	type?: string,
	display_name: string,
	password: string,
	name: string,
	events?: {
		focusin?: (e: { target: HTMLInputElement; }) => void;
		focusout?: (e: { target: HTMLInputElement; }) => void;
	  }
}

export class PassInfo extends Block<IPassInfo> {
	constructor(props: IPassInfo) {
		super({ type: 'passInfo', ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
