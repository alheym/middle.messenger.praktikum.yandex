
import ByttonTmpl from './Button.tmpl.hbs';
import './style.scss';



export default function (text, classNames, type,id){

    return ByttonTmpl({ text , classNames, type, id});
}
