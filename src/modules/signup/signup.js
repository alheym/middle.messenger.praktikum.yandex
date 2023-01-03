
import './style.scss';
import SignupTmpl from './signup.hbs';
import Button from '../../components/Button/Button';
import Wrapper from '../../components/Wrapper/Wrapper';
import ButtonLink from '../../components/ButtonLink/ButtonLink';



export default function Signup() {


const inputList = [
    {id:'email', name:'email', type:'email', label:'Почта', placeholder:'Почта', errorMessage:'', disabled: false},
    {id:'login', name:'login', type:'text', label:'Логин', placeholder:'Логин', errorMessage:'', disabled: false},
    {id:'first_name', name:'name', type:'text', label:'Имя', placeholder:'Имя', errorMessage:'', disabled: false},
    {id:'second_name', name:'second_name', type:'text', label:'Фамилия', placeholder:'Фамилия', errorMessage:'', disabled: false},
    {id:'phone', name:'phone', type:'phone', label:'Телефон', placeholder:'Телефон', errorMessage:'', disabled: false},
    {id:'password', name:'password', label:'Пароль', type:'password', placeholder:'Пароль', errorMessage:'', disabled: false},
    {id:'password', name:'password', label:'Пароль (еще раз)', type:'password', placeholder:'Пароль', errorMessage:'', disabled: false},
];


    const content = SignupTmpl({

        btnPrimary: Button("Зарегистрироваться", "button__primary", "submit", "signupSubmit"),
        btnLink: ButtonLink("linkToSignin", "Войти", 'buttonLink_center'),
        wrapper: Wrapper(inputList, "signup_wrapper")
    });



    return content;
}
