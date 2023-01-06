import './_button.scss';
import ButtonTmpl from './Button.tmpl.hbs';

export default function (text, className) {

    return ButtonTmpl({ text, className });
}
