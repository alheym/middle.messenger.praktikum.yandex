import './index.scss';
import Main from './components/Main/Main.hbs';

const App = () => {
    return (() => Main())();
};

document.querySelector('#root').innerHTML = App();
