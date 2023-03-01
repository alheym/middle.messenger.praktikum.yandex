import './_modal.scss';
import template from './Modal.hbs';
import Block from '../../utils/Block';
import ChatController from '../../controllers/ChatController';
import { withStore } from '../../utils/Store';


interface IModal {

}


export class Modal extends Block {

	constructor(props: IModal) {
		super({ type: 'Modal', ...props });

		this.element!.addEventListener('click', (e) => {
			const target = e.target as HTMLElement;
			if (target.hasAttribute('data-action')) {
				console.log(target);
				e.preventDefault();
				const action = target.getAttribute('data-action');

				switch (action) {
					case 'addUsers': {
						console.log('addUsers');
						const addModal = document.querySelector('.modal__container') as HTMLElement,
							modalSetting = document.querySelector('.modalSetting__container') as HTMLElement;
						modalSetting?.classList.toggle('active-modal');
						addModal.classList.toggle('active');
						break;
					}
					case 'removeChat': {
						console.log('removeChat');
						ChatController.deleteChat(this.props.chatId);
						console.log(this.props.chatId);
						break;
					}
				}
			}
		})
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

const withChat = withStore((state) => ({
	chatId: state.chatId,
	token: state.token,
	user: state.user,
	chat: state.chat
}));

export const Modals = withChat(Modal);
