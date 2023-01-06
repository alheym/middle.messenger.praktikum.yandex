import './_wrapper.scss';
import Wrapper from './Wrapper.tmpl.hbs';
import InputText from '../InputText/InputText.js';



export default function (inputList, className) {

    const wrappedList = inputList.map(item => InputText(item.id, item.name, item.label, item.type, item.placeholder, item.errorMessage, item.disabled, item.classLabel)).join('');

    return Wrapper({ wrappedList, className });
}
