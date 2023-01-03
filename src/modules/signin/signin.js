
import './style.scss';
import SigninTmpl from './signin.hbs';
import Button from '../../components/Button/Button';
import Wrapper from '../../components/Wrapper/Wrapper';
import ButtonLink from '../../components/ButtonLink/ButtonLink';



export default function Signin() {


const inputList = [
    {id:'login', name:'login', label:'Логин', type:'text', placeholder:'Логин', errorMessage:'Неверный логин', disabled: false},
    {id:'password', name:'password', label:'Пароль', type:'password', placeholder:'Пароль', errorMessage:'', disabled: false},
];


    const content = SigninTmpl({

        btnPrimary: Button("Войти", "button__primary", "submit", "signinSubmit"),
        btnLink: ButtonLink("linkToSignUp", "Нет аккаунта?", 'buttonLink_center'),
        wrapper: Wrapper(inputList, "signin_wrapper")
    });



    return content;
}
