import './editData.scss';
import template from './editData.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/Button/Button';
import { validate, validForm } from '../../utils/Validator';
import { ProfileAvatar } from '../../components/ProfileAvatar/ProfileAvatar';
import { InputEdit } from '../../components/InputEdit/InputEdit';


export class EditData extends Block {
	constructor() {
		super('EditData');
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
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
		});

		this.children.inputLogin = new InputEdit({
			label: 'Логин',
			name: 'login',
			type: 'login',
			placeholder: 'ivanivanov',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
		});

		this.children.inputPhone = new InputEdit({
			label: 'Телефон',
			name: 'phone',
			type: 'phone',
			placeholder: '+7(909) 967 30 30',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
		});

		this.children.inputDisplayName = new InputEdit({
			label: 'Имя в чате',
			name: 'display_name',
			type: 'text',
			placeholder: 'Иван',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
		});

		this.children.inputFirstName = new InputEdit({
			label: 'Имя',
			name: 'first_name',
			type: 'text',
			placeholder: 'Иван',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
		});

		this.children.inputSecondName = new InputEdit({
			label: 'Фамилия',
			name: 'second_name',
			type: 'text',
			placeholder: 'Иванов',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
		});

		this.children.btnSave = new Button({
			type: 'submit',
			text: 'Сохранить',
			className: 'button__primary',
			events: {
				click: (e: Event) => {
					e.preventDefault();
					validForm('.form');
				}
			},
		});
	}


	render() {
		return this.compile(template, { ...this.props });
	}

}
