import NotFound from '../../modules/404/404';

const notFound = () => {

    const component = NotFound();

    return component;
};

document.querySelector('#root').innerHTML = notFound();