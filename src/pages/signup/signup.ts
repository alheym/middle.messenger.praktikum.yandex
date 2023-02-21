import './signup.scss';
import template from './signup.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/Button/Button';
import { InputText } from '../../components/InputText/InputText';
import { validate, isValidForm, setErrorMes, removeError, validForm, VALIDATION_EVENTS } from '../../utils/Validator';
import { SignupData } from '../../api/AuthAPI';
import AuthController from '../../controllers/AuthController';


export class Signup extends Block {
	constructor() {
		super('Signup');
	}

	init() {
		this.children.inputEmail = new InputText({
			name: 'email',
			label: 'Почта',
			type: 'email',
			placeholder: 'Почта',
			classLabel: 'fs fs-9 fw',
			events: VALIDATION_EVENTS,
		});

		this.children.inputLogin = new InputText({
			name: 'login',
			label: 'Логин',
			type: 'text',
			placeholder: 'Логин',
			classLabel: 'fs fs-9 fw',
			events: VALIDATION_EVENTS,
		});

		this.children.inputName = new InputText({
			name: 'first_name',
			label: 'Имя',
			type: 'text',
			placeholder: 'Имя',
			classLabel: 'fs fs-9 fw',
			events: VALIDATION_EVENTS,
		});

		this.children.inputSecName = new InputText({
			name: 'second_name',
			label: 'Фамилия',
			type: 'text',
			placeholder: 'Фамилия',
			classLabel: 'fs fs-9 fw',
			events: VALIDATION_EVENTS,
		});

		this.children.inputPhone = new InputText({
			name: 'phone',
			label: 'Телефон',
			type: 'phone',
			placeholder: 'Телефон',
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

		this.children.inputPassRet = new InputText({
			name: 'passwordRet',
			label: 'Пароль (еще раз)',
			type: 'password',
			placeholder: 'Пароль',
			classLabel: 'fs fs-9 fw',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => {
					const pass = document.querySelector('input[name=password]') as HTMLInputElement;
					if (pass.value !== (e.target as HTMLInputElement).value) {
						setErrorMes(e.target.name, 'Пароли не совпадают')
					} else {
						removeError(e.target.name)
					}
				},
				focusin: (e: { target: HTMLInputElement; }) => validate,
			},
		});

		this.children.btnPrimary = new Button({
			type: 'submit',
			text: 'Зарегистрироваться',
			className: 'button__primary fs fs-13',
			events: {
				click: (e: Event) => {
					e.preventDefault();
					if (isValidForm('.form')) {
						this.onSubmit();
					}
				}
			},
		});

		this.children.btnLink = new Button({
			text: 'Войти',
			className: 'button__link fs fs-11',
			events: {
				click: () => { window.location.href = '/' }
			},
		});
	}


	formSubmit(e: Event) {

		e.preventDefault();
		const form = document.getElementById('form') as HTMLFormElement;
		const inputs = form.querySelectorAll('input');

		let arrForm: any = {};

		inputs.forEach((input) => {
			arrForm[input.name] = input.value;
		});

		console.log(arrForm);
	}

	onSubmit() {
		const data: any = validForm('.form');
		AuthController.signup(data as SignupData);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
