import Signin from '../../modules/signin/signin';


const SigninPage= () => {

    const  component = Signin();

    return component;
};

document.querySelector('#root').innerHTML = SigninPage();
