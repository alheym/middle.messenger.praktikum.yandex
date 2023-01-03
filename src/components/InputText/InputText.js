import InputText from './InputText.tmpl.hbs';
import './style.scss';


export default function (id, name ,label, type, placeholder, errorMessage, disabled) {

    const input = InputText({ id, name ,label, type, placeholder, errorMessage, disabled});

    return input;
}
