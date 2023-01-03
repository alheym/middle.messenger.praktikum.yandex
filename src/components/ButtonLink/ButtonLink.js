
import tmpl from './BtnLink.tmpl.hbs';
import './style.scss';



export default function (id,text, classNames){

    return tmpl({id, text , classNames});
}