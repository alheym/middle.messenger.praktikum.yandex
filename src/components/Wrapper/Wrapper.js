
import Wrapper from './Wrapper.tmpl.hbs';
import InputText from '../InputText/InputText.js';
import './style.scss';



export default function (inputList, classNames) {

    const wrappedList = inputList.map(item=>InputText(item.id,item.name,item.label,item.type, item.placeholder,item.errorMessage, item.disabled)).join('');

    return Wrapper({ wrappedList, classNames});
}
