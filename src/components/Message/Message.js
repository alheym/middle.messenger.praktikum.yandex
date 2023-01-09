import './_message.scss';
import MessageTmpl from './Message.hbs';

export default function (id, name, text, img, time, check, classMsg) {

    return MessageTmpl({ id, name, text, img, time, check, classMsg });
}
