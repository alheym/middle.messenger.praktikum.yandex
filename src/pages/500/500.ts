import ServerError from '../../modules/500/500';

const serverError = () => {

    const component = ServerError();

    return component;
};

document.querySelector('#root').innerHTML = serverError();
