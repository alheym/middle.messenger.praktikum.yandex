import './_error.scss';
import Block from '../../utils/Block';
import template from './Error.hbs';

interface IError {
	type?: string,
	title: string,
	subtitle: string,
	link: string,
	linkText: string,
}

export class Error extends Block<IError> {
	constructor(props: IError) {
		super({ type: 'error', ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
