import './chat.scss';
import ChatList from './chat.hbs';
import ChatItem from '../../components/ChatItem/ChatItem';
import Message from '../../components/Message/Message';
import Button from '../../components/Button/Button';
import Profile from '../../components/Profile/Profile';
import Edit from '../../components/Edit/Edit';


export default function Chat() {

    const chat = [
        {
            id: '122',
            avatar: undefined,
            name: 'Вадим',
            text: 'Вы: Круто!',
            time: '12:00',
            uread: 0
        },
        {
            id: '123',
            avatar: undefined,
            name: 'Илья',
            text: 'Друзья, у меня для вас особенный выпуск новостей!...',
            time: '9:12',
            uread: 4
        },
        {
            id: '124',
            avatar: undefined,
            name: 'тет-а-теты',
            text: 'И Human Intarface Guidelines и Material Design рекомендуют...',
            time: 'Ср',
            uread: 0
        },
        {
            id: '125',
            avatar: undefined,
            name: '1, 2, 3',
            text: 'Миллионы россиян ежедневно проводят десятки часов свое..',
            time: 'Пн',
            uread: 0
        },
        {
            id: '126',
            avatar: undefined,
            name: 'Design Destroyer',
            text: 'В 2008 году художник Jon Rafman начал собирать...',
            time: 'Пн',
            uread: 0
        },
    ];

    const chatList = chat.map((item) => {
        return ChatItem(item.id, item.avatar, item.name, item.text, item.time, item.uread);
    }).join('');

    const message = [
        {
            id: '11',
            name: 'Вадим',
            text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
                '\n' +
                'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
            img: false,
            time: '11:56',
            check: false
        },
        {
            id: '22',
            name: 'Вадим',
            text: false,
            img: 'https://sun9-64.userapi.com/impg/pO8ZWmZI0p-lT5KynvCF8sEmSO4_RCGEkW8ncw/81lnBvj_Wqc.jpg?size=316x211&quality=95&sign=8711a4944f7a0d018f37379fe9807e45&type=album',
            time: '11:56',
            check: false,
        },
        {
            id: '33',
            name: 'Вы',
            text: 'Круто!',
            img: false,
            time: '12:00',
            check: true,
        }
    ];

    const messageList = message.map((item) => {

        let classMsg = item.name === 'Вы' ? 'message__you' : 'message__comp';

        if (item.img) {
            classMsg = `${classMsg} message__img`;
        }

        return Message(item.id, item.name, item.text, item.img, item.time, item.check, classMsg);
    }).join('');


    const profile = [
        {
            id: '',
            profileName: 'Иван',
            email: 'pochta@yandex.ru',
            login: 'ivanivanov',
            phone: '+7(909) 967 30 30',
            second_name: 'Иванов',
        }
    ];

    const profileList = profile.map((item) => {
        return Profile(item.id, item.profileName, item.email, item.login, item.phone, item.second_name);
    }).join('');

    const editEmail = [
        {
            title: 'Редактирование почты',
            label: 'Почта',
            name: 'email',
            type: 'email',
            placeholder: 'pochta@yandex.ru',
            classEdit: 'edit__email',
            pass: false,
        }
    ],
        editLogin = [
            {
                title: 'Редактирование логина',
                label: 'Логин',
                name: 'login',
                type: 'login',
                placeholder: 'ivanivanov',
                classEdit: 'edit__login',
                pass: false,
            },
        ],
        editPhone = [
            {
                title: 'Редактирование телефона',
                label: 'Телефон',
                name: 'phone',
                type: 'phone',
                placeholder: '+7(909) 967 30 30',
                classEdit: 'edit__phone',
                pass: false,
            },
        ],
        editFirstName = [
            {
                title: 'Редактирование имени',
                label: 'Имя',
                name: 'first_name',
                type: 'first_name',
                placeholder: 'Иван',
                classEdit: 'edit__name',
                pass: false,
            },
        ],
        editSecondName = [
            {
                title: 'Редактирование фамилии',
                label: 'Фамилия',
                name: 'second_name',
                type: 'second_name',
                placeholder: 'Иванов',
                classEdit: 'edit__scName',
                pass: false,
            },
        ];
        editPass = [
            {
                title: 'Старый пароль',
                label: 'Старый пароль',
                name: 'password',
                type: 'password',
                placeholder: '•••••••••',
                classEdit: 'edit__password',
                pass: true,
                labelNewPass: 'Новый пароль',
                labelRetPass: 'Повторите пароль',
                placeholderNew: '•••••••••••',
            },
        ];

    const editEmailWindow = editEmail.map((item) => {
        return Edit(item.title, item.label, item.name, item.type, item.placeholder, item.classEdit, item.pass);
    }).join('');

    const editLoginWindow = editLogin.map((item) => {
        return Edit(item.title, item.label, item.name, item.type, item.placeholder, item.classEdit, item.pass);
    }).join('');

    const editPhoneWindow = editPhone.map((item) => {
        return Edit(item.title, item.label, item.name, item.type, item.placeholder, item.classEdit, item.pass);
    }).join('');

    const editFirstNameWindow = editFirstName.map((item) => {
        return Edit(item.title, item.label, item.name, item.type, item.placeholder, item.classEdit, item.pass);
    }).join('');

    const editSecondNameWindow = editSecondName.map((item) => {
        return Edit(item.title, item.label, item.name, item.type, item.placeholder, item.classEdit, item.pass);
    }).join('');

    const editPassWindow = editPass.map((item) => {
        return Edit(item.title, item.label, item.name, item.type, item.placeholder, item.classEdit, item.pass, item.labelNewPass, item.labelRetPass, item.placeholderNew);
    }).join('');

    return ChatList({
        chatList: chatList,
        messageList: messageList,
        name: 'Вадим',
        profileList: profileList,
        editEmailWindow: editEmailWindow,
        editLoginWindow: editLoginWindow,
        editPhoneWindow: editPhoneWindow,
        editFirstNameWindow: editFirstNameWindow,
        editSecondNameWindow: editSecondNameWindow,
        editPassWindow: editPassWindow,
        btnSend: Button("", "button__send"),
        btnAdd: Button("", "button__add"),
    });
}
