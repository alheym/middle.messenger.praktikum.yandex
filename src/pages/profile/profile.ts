import './profile.scss';
import template from './profile.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/Button/Button';
import { Avatar } from '../../components/Avatar/Avatar';
import { InputEdit } from '../../components/InputEdit/InputEdit';
import { withStore } from '../../utils/Store';
import AuthController from '../../controllers/AuthController';

export class Profile extends Block {
	protected initChildren() {
		this.children.avatar = new Avatar({
			display_name: this.props.display_name,
			value: `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}`,

		});

		this.children.inputEmail = new InputEdit({
			label: 'Почта',
			name: 'email',
			type: 'email',
			placeholder: this.props.email,
			property: 'readonly',
			classInput: 'readonly',
		});

		this.children.inputLogin = new InputEdit({
			label: 'Логин',
			name: 'login',
			type: 'login',
			placeholder: this.props.login,
			property: 'readonly',
			classInput: 'readonly',

		});

		this.children.inputPhone = new InputEdit({
			label: 'Телефон',
			name: 'phone',
			type: 'phone',
			placeholder: this.props.phone,
			property: 'readonly',
			classInput: 'readonly',

		});

		this.children.inputDisplayName = new InputEdit({
			label: 'Имя в чате',
			name: 'display_name',
			type: 'text',
			placeholder: this.props.display_name,
			property: 'readonly',
			classInput: 'readonly',

		});

		this.children.inputFirstName = new InputEdit({
			label: 'Имя',
			name: 'first_name',
			type: 'text',
			placeholder: this.props.first_name,
			property: 'readonly',
			classInput: 'readonly',

		});

		this.children.inputSecondName = new InputEdit({
			label: 'Фамилия',
			name: 'second_name',
			type: 'text',
			placeholder: this.props.second_name,
			property: 'readonly',
			classInput: 'readonly',

		});

		this.children.btnChangePass = new Button({
			text: 'Изменить пароль',
			className: 'button__link',
			events: {
				click: (e: Event) => {
					e.preventDefault();
					document.location = '/editPass';
				},
			},
		});

		this.children.btnChangeData = new Button({
			text: 'Изменить данные',
			className: 'button__link',
			events: {
				click: (e: Event) => {
					e.preventDefault();
					document.location = '/settings';
				},
			},
		});

		this.children.btnOut = new Button({
			text: 'Выйти',
			className: 'button__link button__left red',
			events: {
				click: (e: Event) => {
					e.preventDefault();
					AuthController.logout();
				},
			},
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

const withProfile = withStore((state) => ({ ...state.user }));

export const ProfileData = withProfile(Profile);
