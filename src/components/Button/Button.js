import './_button.scss';
import ButtonTmpl from './Button.tmpl.hbs';

export default function (text, className, type) {

    return ButtonTmpl({ text, className, type });
}
