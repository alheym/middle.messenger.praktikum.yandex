import './chat.scss';
import template from './chat.hbs';
import Block from '../../utils/Block';
import { ChatItem } from '../../components/ChatItem/ChatItem';
import { Message } from '../../components/Message/Message';
import { Button } from '../../components/Button/Button';
import { ChatTitles } from '../../components/ChatTitle/ChatTitle';
import ChatController from '../../controllers/ChatController';
import { IMessage } from '../../components/Message/Message';
import { withStore } from '../../utils/Store';


export class Chat extends Block {

	protected initChildren() {
		// console.log(this.props);

		this.children.chatList = [];

		if (this.props?.allChats !== undefined) {
			Object.values(this.props.allChats).map((chats: any) => {
				const text = chats.last_message?.content.length > 30 ? `${chats.last_message?.content.slice(0, 30)}...` : chats.last_message?.content,
					hour = String(new Date(chats.last_message?.time).getHours()).padStart(2, '0'),
					minutes = String(new Date(chats.last_message?.time).getMinutes()).padStart(2, '0'),
					time = chats.last_message?.time ? `${hour}:${minutes}` : '';

				this.children.chatList.push(new ChatItem({
					name: chats.title,
					text: text,
					uread: chats.unread_count!,
					avatar: chats.avatar!,
					time: time,
					events: {
						click: () => {
							ChatController.getChat(chats.id, this.props.user.id, chats.title);
						},
					}
				}))
			})
		}

		if (this.props?.token !== undefined) {
			this.children.header = new ChatTitles({
				id: this.props.chatId,
				chatName: this.props.nameChat,
				userAvatar: this.props.user.avatar,
			});
		}

		this.children.messages = [];

		if (this.props?.chat !== undefined) {
			this.props.chat.forEach((message: IMessage) => {
				const date = new Date(message.time);
				const myMessage = message.user_id === this.props.user.id;
				this.children.messages.unshift(
					new Message({
						name: message.name,
						text: message.content,
						time: `${date.getHours()}:${date.getMinutes()}`,
						check: message.check,
						classMsg: myMessage ? 'message__you' : 'message__comp'
					}),
				);
			});
		}

		this.children.btnSend = new Button({
			type: 'submit',
			className: 'button__send',
			events: {
				click: (e: Event) => {
					e.preventDefault();
					const elm = document.querySelector('[name="message"]') as HTMLInputElement
					const data = elm.value
					ChatController.sendMessage(data);
				}
			},
		})

		this.children.btnAdd = new Button({
			className: 'button__add',
			events: {
				click: () => { }
			},
		})

		this.children.addChatBtn = new Button({
			text: '?????????? ??????',
			className: 'button__primary fs fs-13',
			events: {
				click: () => {
					let data = "?????????? ??????"
					const chatName = prompt("????????????????????, ?????????????? ?????? ????????:", data);
					if (chatName != null || chatName != "") {
						data = chatName!
					}
					if (data) {
						const chatTitleObj = { 'title': data }
						ChatController.createChat(chatTitleObj);
					}
				}
			},
		})
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

const withChats = withStore((state) => ({
	allChats: state.allChats,
	chatId: state.chatId,
	nameChat: state.nameChat,
	token: state.token,
	user: state.user,
	chat: state.chat
}));

export const Chats = withChats(Chat);
