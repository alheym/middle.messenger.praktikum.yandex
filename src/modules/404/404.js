
import Error from '../../components/Error/Error';
import NotFoundTmpl from './404.hbs';


export default function NotFound() {


    return NotFoundTmpl({error: Error(
             '404',
             'Не туда попали',
            './chatList.html',
             'Назад к чатам'

        )});
}
