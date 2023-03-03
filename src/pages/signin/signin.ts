import './signin.scss';
import template from './signin.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/Button/Button';
import { InputText } from '../../components/InputText/InputText';
import { validForm, isValidForm, VALIDATION_EVENTS } from '../../utils/Validator';
import { SigninData } from '../../api/AuthAPI';
import AuthController from '../../controllers/AuthController';

export class Signin extends Block {
	constructor() {
		super('Signin');
	}

	init() {
		this.children.inputLogin = new InputText({
			name: 'login',
			label: 'Логин',
			type: 'text',
			placeholder: 'Логин',
			classLabel: 'fs fs-9 fw',
			events: VALIDATION_EVENTS,
		});

		this.children.inputPass = new InputText({
			name: 'password',
			label: 'Пароль',
			type: 'password',
			placeholder: 'Пароль',
			classLabel: 'fs fs-9 fw',
			events: VALIDATION_EVENTS,
		});

		this.children.btnPrimary = new Button({
			type: 'submit',
			text: 'Войти',
			className: 'button__primary fs fs-13',
			events: {
				click: (e: Event) => {
					e.preventDefault();
					if (isValidForm('.form')) {
						this.onSubmit();
					}
				},
			},
		});

		this.children.btnLink = new Button({
			text: 'Нет аккаунта?',
			className: 'button__link fs fs-11',
			events: {
				click: () => { window.location.href = '/sign-up'; },
			},
		});
	}

	onSubmit() {
		const data: any = validForm('.form');
		AuthController.signin(data as SigninData);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
