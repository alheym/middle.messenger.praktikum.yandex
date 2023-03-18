import template from './ChatTitle.hbs';
import Block from '../../utils/Block';
import { Modals } from '../Modal/Modal';
import { addUser } from '../addUsers/addUsers';
import ChatController from '../../controllers/ChatController';
import { withStore } from '../../utils/Store';
import { ChatInfo, IChatMember } from '../../api/ChatAPI';
import { User } from '../../api/AuthAPI';

interface IaddUsers {
	type?: string;
	user_data: User;
	chatId: number;
	searching: boolean;
	currentChatMembers: IChatMember[];
	users: IChatMember[] | User[];
}

export class ChatTitle extends Block<IaddUsers> {
	isAdmin: boolean = false;

	chatData: ChatInfo | undefined = undefined;

	// eslint-disable-next-line no-undef
	search: NodeJS.Timeout | number = 0;

	constructor(props: IaddUsers) {
		super({ type: 'IaddUsers', ...props });

		this.element!.addEventListener('click', (e) => {
			const target = e.target as HTMLElement;

			if (target.hasAttribute('data-settings')) {
				const modalSetting = document.querySelector('.modalSetting__container') as HTMLElement;
				modalSetting?.classList.toggle('active-modal');
			}

			if (target.hasAttribute('data-close')) {
				e.preventDefault();
				const addModal = document.querySelector('.modal__container') as HTMLElement;
				addModal.classList.toggle('active');
			}
		});

		this.element!.addEventListener('click', async (e) => {
			const target = e.target as HTMLElement;

			if (target.hasAttribute('data-delete')) {
				e.preventDefault();
				const userId = target.getAttribute('data-delete');

				try {
					await ChatController.deleteUserFromChat({ users: [Number(userId)], chatId: this.props.chatId });
					target.setAttribute('disabled', 'true');
					target.classList.add('button__disabled');
				} catch (e) {
					console.error(e);
				}
			}

			if (target.hasAttribute('data-expel')) {
				e.preventDefault();
				const userId = target.getAttribute('data-expel');

				try {
					await ChatController.deleteUserFromChat({ users: [Number(userId)], chatId: this.props.chatId });
					target.removeAttribute('data-expel');
					target.setAttribute('data-invite', String(userId));

					target.textContent = 'Добавить';
					target.classList.remove('button__red');
					target.classList.add('btn_base');
				} catch (e) {
					console.error(e);
					target.setAttribute('disabled', 'true');
					target.textContent = 'Error';
				}
			}

			if (target.hasAttribute('data-invite')) {
				e.preventDefault();
				const userId = Number(target.getAttribute('data-invite'));
				try {
					await ChatController.addUserToChat({ users: [userId], chatId: this.props.chatId });
					target.setAttribute('disabled', 'true');
					target.classList.add('button__disabled');
				} catch (e) {
					console.error(e);

					target.textContent = 'Error';
				}
			}
		});
	}

	protected initChildren() {
		this.children.modalSetting = new Modals({
		});

		// eslint-disable-next-line new-cap
		this.children.addUser = new addUser({
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

const withUser = withStore((state) => ({
	chatId: state.chatId,
	token: state.token,
	user_data: state.user,
	chat: state.chat,
}));

export const ChatTitles = withUser(ChatTitle as unknown as typeof Block);
