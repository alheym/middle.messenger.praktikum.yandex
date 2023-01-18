import './editPass.scss';
import template from './editPass.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/Button/Button';
import { validate, validForm, setErrorMes, removeError } from '../../utils/Validator';
import { ProfileAvatar } from '../../components/ProfileAvatar/ProfileAvatar';
import { InputEdit } from '../../components/InputEdit/InputEdit';


export class EditPass extends Block {
	constructor() {
		super('EditPass');
	}

	init() {
		this.children.profileAvatar = new ProfileAvatar({
			display_name: 'Иван',
		});

		this.children.password = new InputEdit({
			label: 'Старый пароль',
			name: 'password',
			type: 'password',
			placeholder: '•••••••••',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
		});

		this.children.passwordNew = new InputEdit({
			label: 'Новый пароль',
			name: 'passwordNew',
			type: 'password',
			placeholder: '•••••••••••',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
		});

		this.children.passwordRet = new InputEdit({
			label: 'Повторите пароль',
			name: 'passwordRet',
			type: 'password',
			placeholder: '•••••••••••',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => {
					const pass = document.querySelector('input[name=passwordNew]') as HTMLInputElement;
					if (pass.value !== (e.target as HTMLInputElement).value) {
						setErrorMes(e.target.name, 'Пароли не совпадают')
					} else {
						removeError(e.target.name)
					}
				},
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
