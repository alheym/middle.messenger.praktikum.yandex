import './signin.scss';
import SigninTmpl from './signin.hbs';
import Button from '../../components/Button/Button';
import Wrapper from '../../components/Wrapper/Wrapper';


export default function Signin() {

    const inputList = [
    { 
        id: 'login', 
        name: 'login', 
        label: 'Логин', 
        type: 'text', 
        placeholder: 'Логин', 
        errorMessage: 'Неверный логин', 
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
    ];

    const content = SigninTmpl({
        btnPrimary: Button('Войти', 'button__primary fs fs-13', 'submit'),
        btnLink: Button('Нет аккаунта?', 'button__link fs fs-11'),
        wrapper: Wrapper(inputList, 'signin_wrapper'),
    });

    return content;
}
