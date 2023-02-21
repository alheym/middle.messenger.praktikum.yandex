import './chat.scss';
import template from './chat.hbs';
import Block from '../../utils/Block';
import { ChatItem } from '../../components/ChatItem/ChatItem';
import { Message } from '../../components/Message/Message';
import { Button } from '../../components/Button/Button';


export class Chat extends Block {
	constructor() {
		super('Chat');
	}

	init() {
		this.children.chatItem1 = new ChatItem({
			id: '1',
			avatar: null,
			name: 'Вадим',
			text: 'Вы: Круто!',
			time: '12:00',
			uread: 0,
		});

		this.children.chatItem2 = new ChatItem({
			id: '2',
			avatar: null,
			name: 'Илья',
			text: 'Друзья, у меня для вас особенный выпуск новостей!...',
			time: '9:12',
			uread: 4
		});

		this.children.chatItem3 = new ChatItem({
			id: '3',
			avatar: null,
			name: 'тет-а-теты',
			text: 'И Human Intarface Guidelines и Material Design рекомендуют...',
			time: 'Ср',
			uread: 0
		});

		this.children.chatItem4 = new ChatItem({
			id: '4',
			avatar: null,
			name: '1, 2, 3',
			text: 'Миллионы россиян ежедневно проводят десятки часов свое..',
			time: 'Пн',
			uread: 0
		});

		this.children.chatItem5 = new ChatItem({
			id: '5',
			avatar: null,
			name: 'Design Destroyer',
			text: 'В 2008 году художник Jon Rafman начал собирать...',
			time: 'Пн',
			uread: 0
		});

		this.children.message = new Message({
			name: 'Вадим',
			text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
				'\n' +
				'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
			img: false,
			time: '11:56',
			check: false,
			classMsg: 'message__comp',
		});

		this.children.message1 = new Message({
			name: 'Вадим',
			text: '',
			img: 'https://sun9-64.userapi.com/impg/pO8ZWmZI0p-lT5KynvCF8sEmSO4_RCGEkW8ncw/81lnBvj_Wqc.jpg?size=316x211&quality=95&sign=8711a4944f7a0d018f37379fe9807e45&type=album',
			time: '11:56',
			check: false,
			classMsg: 'message__comp',
		});

		this.children.message2 = new Message({
			name: 'Вы',
			text: 'Круто!',
			img: false,
			time: '12:00',
			check: true,
			classMsg: 'message__you',
		})

		this.children.btnSend = new Button({
			type: 'submit',
			className: 'button__send',
			events: {
				click: (e: Event) => {
					e.preventDefault();
				}
			},
		})

		this.children.btnAdd = new Button({
			className: 'button__add',
			events: {
				click: () => { }
			},
		})
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
