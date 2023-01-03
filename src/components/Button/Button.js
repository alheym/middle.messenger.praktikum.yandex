
import ButtonTmpl from './Button.tmpl.hbs';
import './style.scss';



export default function (text, classNames, type,id){

    return ButtonTmpl({ text , classNames, type, id});
}
