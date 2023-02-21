import './profile.scss';
import template from './profile.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/Button/Button';
import { ProfileAvatar } from '../../components/ProfileAvatar/ProfileAvatar';
import { InputEdit } from '../../components/InputEdit/InputEdit';


export class Profile extends Block {
	constructor() {
		super('Profile');
	}

	init() {
		this.children.profileAvatar = new ProfileAvatar({
			display_name: 'Иван',
		});

		this.children.inputEmail = new InputEdit({
			label: 'Почта',
			name: 'email',
			type: 'email',
			placeholder: 'pochta@yandex.ru',
			property: 'readonly',
			classInput: 'readonly'

		});

		this.children.inputLogin = new InputEdit({
			label: 'Логин',
			name: 'login',
			type: 'login',
			placeholder: 'ivanivanov',
			property: 'readonly',
			classInput: 'readonly'

		});

		this.children.inputPhone = new InputEdit({
			label: 'Телефон',
			name: 'phone',
			type: 'phone',
			placeholder: '+7(909) 967 30 30',
			property: 'readonly',
			classInput: 'readonly'

		});

		this.children.inputDisplayName = new InputEdit({
			label: 'Имя в чате',
			name: 'display_name',
			type: 'text',
			placeholder: 'Иван',
			property: 'readonly',
			classInput: 'readonly'

		});

		this.children.inputFirstName = new InputEdit({
			label: 'Имя',
			name: 'first_name',
			type: 'text',
			placeholder: 'Иван',
			property: 'readonly',
			classInput: 'readonly'

		});

		this.children.inputSecondName = new InputEdit({
			label: 'Фамилия',
			name: 'second_name',
			type: 'text',
			placeholder: 'Иванов',
			property: 'readonly',
			classInput: 'readonly'

		});

		this.children.btnChangePass = new Button({
			text: 'Изменить пароль',
			className: 'button__link',
			events: {
				click: (e: Event) => {
					e.preventDefault();
					document.location = '/editPass';
				}
			},
		});

		this.children.btnChangeData = new Button({
			text: 'Изменить данные',
			className: 'button__link',
			events: {
				click: (e: Event) => {
					e.preventDefault();
					document.location = '/editData';
				}
			},
		});

		this.children.btnOut = new Button({
			text: 'Выйти',
			className: 'button__link red',
			events: {
				click: (e: Event) => {
					e.preventDefault();
					document.location = '/signin';
				}
			},
		})
	}


	render() {
		return this.compile(template, { ...this.props });
	}
}

