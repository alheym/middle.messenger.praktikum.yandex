import './500.scss';
import template from './500.hbs';
import Block from '../../utils/Block';
import { Error } from '../../components/Error/Error';

export class ServerError extends Block {
	constructor() {
		super('ServerError');
	}

	init() {
		this.children.error = new Error({
			title: '500',
			subtitle: 'Мы уже фиксим',
			link: '/messenger',
			linkText: 'Назад к чатам',
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
