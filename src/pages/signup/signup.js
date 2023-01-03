import Signup from '../../modules/signup/signup';


const SignupPage= () => {

    const  component = Signup();

    return component;
};

document.querySelector('#root').innerHTML = SignupPage();