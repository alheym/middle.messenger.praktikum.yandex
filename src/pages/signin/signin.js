
import Signin from '../../modules/signin/signin';


const SigninPage= () => {

    const  component = Signin();


    return component;
};

document.querySelector('#root').innerHTML = SigninPage();

const formSignIn = document.querySelector('#signInForm');

formSignIn.addEventListener('submit', (e)=>{e.preventDefault(); window.location.pathname = "/chatList.html";});

const linkBtn = document.querySelector('#linkToSignUp');

linkBtn.addEventListener('click', (e)=>{e.preventDefault(); window.location.pathname = "/signUp.html";});
