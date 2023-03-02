import template from './editPass.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/Button/Button';
import {
	validate, validForm, isValidForm, setErrorMes, removeError, VALIDATION_EVENTS,
} from '../../utils/Validator';
import { InputEdit } from '../../components/InputEdit/InputEdit';
import { Avatar } from '../../components/Avatar/Avatar';
import { withStore } from '../../utils/Store';
import UserController from '../../controllers/UserController';

export type EditPassword = {
	oldPassword: string;
	newPassword: string;
}

export class EditPass extends Block {
	protected initChildren() {
		this.children.avatar = new Avatar({
			display_name: this.props.display_name,
			value: `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}`,

		});

		this.children.password = new InputEdit({
			label: 'Старый пароль',
			name: 'oldPassword',
			type: 'password',
			placeholder: '•••••••••',
			events: VALIDATION_EVENTS,
		});

		this.children.passwordNew = new InputEdit({
			label: 'Новый пароль',
			name: 'newPassword',
			type: 'password',
			placeholder: '•••••••••••',
			events: VALIDATION_EVENTS,
		});

		this.children.passwordRet = new InputEdit({
			label: 'Повторите пароль',
			name: 'newPassword2',
			type: 'password',
			placeholder: '•••••••••••',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => {
					const pass = document.querySelector('input[name=newPassword]') as HTMLInputElement;
					if (pass.value !== (e.target as HTMLInputElement).value) {
						setErrorMes(e.target.name, 'Пароли не совпадают');
					} else {
						removeError(e.target.name);
					}
				},
				// @ts-ignore
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				focusin: (e: { target: HTMLInputElement; }) => validate,
			},
		});

		this.children.btnSave = new Button({
			type: 'submit',
			text: 'Сохранить',
			className: 'button__primary',
			events: {
				click: (e: Event) => {
					e.preventDefault();
					if (isValidForm('.form')) {
						this.onSubmit();
					}
				},
			},
		});
	}

	onSubmit() {
		const data = validForm('.form');
		UserController.editPass(data as EditPassword);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

const withUser = withStore((state) => ({ ...state.user }));

export const EditsPass = withUser(EditPass);
