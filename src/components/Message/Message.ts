import './_message.scss';
import template from './Message.hbs';
import Block from '../../utils/Block';


interface IMessage {
	type?: string;
	name: string;
	text: string | boolean;
	time: string;
	img: string | boolean;
	check: boolean;
	classMsg: string;
}

export class Message extends Block<IMessage> {
	constructor(props: IMessage) {
		super({ type: 'Message', ...props });
	}

	public get name(): string {
		return this.props.name;
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

