import './_inputText.scss';
import InputText from './InputText.tmpl.hbs';


export default function (id, name, label, type, placeholder, errorMessage, disabled, classLabel) {

    const input = InputText({ id, name, label, type, placeholder, errorMessage, disabled, classLabel });

    return input;
}
