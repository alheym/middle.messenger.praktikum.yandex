import './404.scss';
import template from './404.hbs';
import Block from '../../utils/Block';
import { Error } from '../../components/Error/Error';



export class NotFound extends Block {
	constructor() {
		super('NotFound');
	}

	init() {
		this.children.error = new Error ({
			title: '404',
			subtitle: 'Не туда попали',
			link: '/chat',
			linkText: 'Назад к чатам',
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
