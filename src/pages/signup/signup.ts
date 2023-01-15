import './signup.scss';
import template from './signup.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/Button/Button';
import { InputText } from '../../components/InputText/InputText';
import { validate, setErrorMes, removeError, validForm } from '../../utils/Validator';


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
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
		});

		this.children.inputLogin = new InputText({
			name: 'login',
			label: 'Логин',
			type: 'text',
			placeholder: 'Логин',
			classLabel: 'fs fs-9 fw',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
		});

		this.children.inputName = new InputText({
			name: 'first_name',
			label: 'Имя',
			type: 'text',
			placeholder: 'Имя',
			classLabel: 'fs fs-9 fw',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
		});

		this.children.inputSecName = new InputText({
			name: 'second_name',
			label: 'Фамилия',
			type: 'text',
			placeholder: 'Фамилия',
			classLabel: 'fs fs-9 fw',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
		});

		this.children.inputPhone = new InputText({
			name: 'phone',
			label: 'Телефон',
			type: 'phone',
			placeholder: 'Телефон',
			classLabel: 'fs fs-9 fw',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
		});

		this.children.inputPass = new InputText({
			name: 'password',
			label: 'Пароль',
			type: 'password',
			placeholder: 'Пароль',
			classLabel: 'fs fs-9 fw',
			events: {
				focusout: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
				focusin: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
			},
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
				focusin: (e: { target: HTMLInputElement; }) => {
					const pass = document.querySelector('input[name=password]') as HTMLInputElement;
					if (pass.value !== (e.target as HTMLInputElement).value) {
						setErrorMes(e.target.name, 'Пароли не совпадают')
					} else {
						removeError(e.target.name)
					}
				},
			},
		});

		this.children.btnPrimary = new Button({
			type: 'submit',
			text: 'Зарегистрироваться',
			className: 'button__primary fs fs-13',
			events: {
				click: (e: Event) => {
					e.preventDefault();
					// this.formSubmit(e);
					validForm('.form')
				}
			},
		});

		this.children.btnLink = new Button({
			text: 'Войти',
			className: 'button__link fs fs-11',
			events: {
				click: () => { }
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

	render() {
		return this.compile(template, { ...this.props });
	}
}
