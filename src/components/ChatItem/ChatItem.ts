import './_chatItem.scss';
import template from './ChatItem.hbs';
import Block from '../../utils/Block';

interface IChatItem {
	type?: string;
	id?: string;
	avatar: string;
	name: string;
	text: string;
	time: string;
	uread: number;
	events?: {
		click: () => void;
	};
}

export class ChatItem extends Block<IChatItem> {
	constructor(props: IChatItem) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
