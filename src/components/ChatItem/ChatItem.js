import './_chatItem.scss';
import ChatItemTmpl from './ChatItem.hbs';

export default function (id, avatar, name, text, time, uread) {

    return ChatItemTmpl({ id, avatar, name, text, time, uread });
}
