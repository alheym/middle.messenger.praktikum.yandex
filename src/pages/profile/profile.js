import Profile from '../../components/Profile/Profile';


const ProfilePage = () => {

    const profile = [
        {
            id: '',
            first_name: 'Иван',
            email: 'pochta@yandex.ru',
            login: 'ivanivanov',
            phone: '+7(909) 967 30 30',
            second_name: 'Иванов',
            display_name: 'Иван',
        }
    ];

    const component = profile.map((item) => {
        return Profile(item.id, item.first_name, item.email, item.login, item.phone, item.second_name, item.display_name);
    }).join('');

    return component;
};

document.querySelector('#root').innerHTML = ProfilePage();
