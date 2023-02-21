import './_addUsers.scss';
import template from './addUsers.hbs';
import Block from '../../utils/Block';
import ChatController from '../../controllers/ChatController';
import UserController from '../../controllers/UserController';
import { withStore } from '../../utils/Store';
import { ChatInfo, IChatMember } from '../../api/ChatAPI';
import { User } from '../../api/AuthAPI';
import { InputSearch } from '../../components/InputSearch/InputSearch';

interface IaddUsers {
	searchInput: InputSearch;
	type?: string;
	user_data: User;
	chatId: number;
	searching: boolean;
	currentChatMembers: IChatMember[];
	users: IChatMember[] | User[];
}

export class addUsers extends Block<IaddUsers> {
	isAdmin: boolean = false;
	chatData: ChatInfo | undefined = undefined;
	search: NodeJS.Timeout | number = 0;

	constructor(props: IaddUsers) {
		super({ type: 'addUsers', ...props });

		this.children.searchInput.setProps({
			events: {
				input: this.findUsers.bind(this)
			}
		});

		this.element!.addEventListener('click', async (e) => {
			const target = e.target as HTMLElement;

			if (target.hasAttribute('data-chatInfo')) {
				e.preventDefault();
				this.loadChatMembers();
			}
		});
	}

	async loadChatMembers() {
		const chatMembers = await ChatController.getChatUsers(this.props.chatId);
		chatMembers.forEach((member: any) => {
			member.isMember = true;
			if (member.role === 'admin') {
				member.isAdmin = true;
			}
		});
		this.setProps({ currentChatMembers: chatMembers, users: chatMembers })
	}

	findUsers(e: Event) {
		if (e.target instanceof HTMLInputElement) {
			const target = e.target;
			clearTimeout(this.search);
			this.search = setTimeout(async () => {
				if (target.value) {
					const users = await UserController.findUser({ login: target.value });
					console.log(users);
					this.setProps({ searching: true, users });
				} else {
					await this.loadChatMembers();
					this.setProps({ searching: false });
				}
			}, 700)
		}
	}

	protected initChildren() {
		this.children.searchInput = new InputSearch({
			name: 'login',
			label: 'Логин',
			type: 'text',
			placeholder: 'Найти пользователей',
			classLabel: 'fs fs-9 fw',
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

const withUser = withStore((state) => ({
	chatId: state.chatId,
	token: state.token,
	user_data: state.user_data,
	chat: state.chat
}));

export const addUser = withUser(addUsers as unknown as typeof Block);
