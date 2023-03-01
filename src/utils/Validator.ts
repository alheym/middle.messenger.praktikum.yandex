const validationRules: Record<string, { reg: RegExp, error: string }> = {
	first_name: {
		reg: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
		error: "Некорректное имя"
	},
	display_name: {
		reg: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
		error: "Имя некорректное"
	},
	second_name: {
		reg: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
		error: "Фамилия некорректная"
	},
	login: {
		reg: /^[A-Za-z][A-Za-z0-9_-]{3,20}/,
		error: "Неверный логин"
	},
	email: {
		reg: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
		error: "Некорректная почта"
	},
	phone: {
		reg: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
		error: "Неверный номер телефона"
	},
	password: {
		reg: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
		error: "Неверный пароль"
	},
	passwordRet: {
		reg: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
		error: "Неверный пароль"
	},
	passwordNew: {
		reg: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
		error: "Неверный пароль"
	},
	oldPassword: {
		reg: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
		error: "Неверный пароль"
	},
	newPassword: {
		reg: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
		error: "Неверный пароль"
	},
	messages: {
		reg: /^\s*$/,
		error: "не должно быть пустым"
	}
};

export function validate(e: Event) {
	const input = e.target as HTMLInputElement;
	const name = input.name;
	const value = input.value;
	const pattern = validationRules[name].reg;
	const regExp = new RegExp(pattern);
	const isValid = regExp.test(String(value))
	if (!isValid) {
		setErrorMes(name, validationRules[name].error);
	} else {
		removeError(name);
		removeError('form')
	}
}

export const VALIDATION_EVENTS = {
	focusout: validate,
	focusin: validate,
}

export function setErrorMes(name: string, error: string) {
	let span = document.getElementById('error_' + name);
	if (span) {
		span.classList.add("error")
		span.innerHTML = error;
	}
}
export function removeError(name: string) {
	let span = document.getElementById('error_' + name);
	if (span) {
		span.classList.remove("error")
		span.innerHTML = '';
	}
}

export function validForm(selectorForm: string) {
	const form = document.getElementById('form') as HTMLFormElement;
	const spans = form!.querySelectorAll('span');
	const inputs = form!.querySelectorAll('input');

	let errorsCounter = 0;
	let arrForm: any = {};
	spans.forEach((span) => {
		if (span.classList.contains("error")) {
			errorsCounter += 1;
		}
	});
	inputs.forEach((input) => {
		if (!input.value) {
			errorsCounter = errorsCounter + 1;
		}
	});

	if (errorsCounter === 0) {
		removeError(selectorForm)
		inputs.forEach((input) => {
			arrForm[input.name] = input.value;
		});
		return arrForm;
	} else {
		let formClass = selectorForm.substring(1, selectorForm.length)
		setErrorMes(formClass, "Все поля должны быть заполнены")
		return arrForm;
	}
}

export function isValidForm(formSelector: string) {
	const validFieldsObject = validForm(formSelector)
	if (Object.keys(validFieldsObject).length > 0) {
		console.log(validFieldsObject)
		return true
	} else {
		console.log(validFieldsObject)
		return false
	}
}
