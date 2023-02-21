import './editData.scss';
import template from './editData.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/Button/Button';
import { validForm, VALIDATION_EVENTS, isValidForm } from '../../utils/Validator';
import { ProfileAvatar } from '../../components/ProfileAvatar/ProfileAvatar';
import { InputEdit } from '../../components/InputEdit/InputEdit';
import { withStore } from '../../utils/Store';
import UserController from '../../controllers/UserController';

export type User = {
	email: string;
	login: string;
	first_name: string;
	second_name: string;
	display_name: string;
	phone: string;
}

export class EditData extends Block {

	init() {

		this.children.inputAvatar = new ProfileAvatar({
			display_name: this.props.display_name,
			value: `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}`,
			name: 'avatar',
		});

		this.children.inputEmail = new InputEdit({
			label: 'Почта',
			name: 'email',
			type: 'email',
			placeholder: this.props.email,
			value: this.props.email,
			events: VALIDATION_EVENTS,
		});

		this.children.inputLogin = new InputEdit({
			label: 'Логин',
			name: 'login',
			type: 'login',
			placeholder: this.props.login,
			value: this.props.login,
			events: VALIDATION_EVENTS,
		});

		this.children.inputPhone = new InputEdit({
			label: 'Телефон',
			name: 'phone',
			type: 'phone',
			placeholder: this.props.phone,
			value: this.props.phone,
			events: VALIDATION_EVENTS,
		});

		this.children.inputDisplayName = new InputEdit({
			label: 'Имя в чате',
			name: 'display_name',
			type: 'text',
			placeholder: this.props.display_name,
			value: this.props.display_name,
			events: VALIDATION_EVENTS,
		});

		this.children.inputFirstName = new InputEdit({
			label: 'Имя',
			name: 'first_name',
			type: 'text',
			placeholder: this.props.first_name,
			value: this.props.first_name,
			events: VALIDATION_EVENTS,
		});

		this.children.inputSecondName = new InputEdit({
			label: 'Фамилия',
			name: 'second_name',
			type: 'text',
			placeholder: this.props.second_name,
			value: this.props.second_name,
			events: VALIDATION_EVENTS,
		});

		this.children.btnSave = new Button({
			type: 'submit',
			text: 'Сохранить',
			className: 'button__primary',
			events: {
				click: (e: Event) => {
					e.preventDefault();
					if (isValidForm('.input')) {
						this.onSubmit();
					}
				}
			},
		});
	}

	onSubmit() {
		const inputFile = document.getElementById("avatar") as HTMLInputElement;
		if (inputFile.files) {
			const data = new FormData();
			console.log(data.append);
			data.append("avatar", (inputFile as any).files[0]);
			UserController.editAvatar(data as any);
		}
		const data = validForm('.input');
		UserController.editUser(data as User);
	}

	render() {
		return this.compile(template, { ...this.props });
	}

}

const withUser = withStore((state) => ({ ...state.user }));

export const EditsData = withUser(EditData);
