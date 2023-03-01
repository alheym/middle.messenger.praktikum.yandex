import './_message.scss';
import template from './Message.hbs';
import Block from '../../utils/Block';


export interface IMessage {
	type?: string;
	user_id?: number;
	name?: string;
	text: string;
	time: string;
	check: boolean;
	classMsg: string;
}

export class Message extends Block<IMessage> {
	constructor(props: IMessage) {
		super({ type: 'Message', ...props });
	}

	render(): DocumentFragment {
		return this.compile(template, { ...this.props });
	}
}

