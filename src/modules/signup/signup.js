import './signup.scss';
import SignupTmpl from './signup.hbs';
import Button from '../../components/Button/Button';
import Wrapper from '../../components/Wrapper/Wrapper';



export default function Signup() {


    const inputList = [
    { 
        id: 'email', 
        name: 'email', 
        type: 'email', 
        label: 'Почта', 
        placeholder: 'Почта', 
        errorMessage: '', 
        disabled: false, 
        classLabel: 'fs fs-9 fw'
    },
    { 
        id: 'login', 
        name: 'login', 
        type: 'text', 
        label: 'Логин', 
        placeholder: 'Логин', 
        errorMessage: '', 
        disabled: false, 
        classLabel: 'fs fs-9 fw'
    },
    { 
        id: 'first_name', 
        name: 'name', 
        type: 'text', 
        label: 'Имя', 
        placeholder: 'Имя', 
        errorMessage: '', 
        disabled: false, 
        classLabel: 'fs fs-9 fw'
    },
    { 
        id: 'second_name', 
        name: 'second_name', 
        type: 'text', 
        label: 'Фамилия', 
        placeholder: 'Фамилия', 
        errorMessage: '', 
        disabled: false, 
        classLabel: 'fs fs-9 fw'
    },
    { 
        id: 'phone', 
        name: 'phone', 
        type: 'phone', 
        label: 'Телефон', 
        placeholder: 'Телефон', 
        errorMessage: '', 
        disabled: false, 
        classLabel: 'fs fs-9 fw'
    },
    { 
        id: 'password', 
        name: 'password', 
        label: 'Пароль', 
        type: 'password', 
        placeholder: 'Пароль', 
        errorMessage: '', 
        disabled: false, 
        classLabel: 'fs fs-9 fw'
    },
    { 
        id: 'password', 
        name: 'password', 
        label: 'Пароль (еще раз)', 
        type: 'password', 
        placeholder: 'Пароль', 
        errorMessage: '', 
        disabled: false, 
        classLabel: 'fs fs-9 fw'
    },
    ];

    const content = SignupTmpl({
        btnPrimary: Button('Зарегистрироваться', 'button__primary fs fs-13'),
        btnLink: Button('Войти', 'button__link fs fs-11'),
        wrapper: Wrapper(inputList, 'signup_wrapper'),
    });

    return content;
}

