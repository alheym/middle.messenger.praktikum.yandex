import Error from '../../components/Error/Error';
import ServerErrorTmpl from './500.hbs';

export default function ServerError() {

    return ServerErrorTmpl({
        error: Error(
            '500',
            'Мы уже фиксим',
            './chatList.html',
            'Назад к чатам'
        )
    });
}
