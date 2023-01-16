import './_profile.scss';
import ProfileTmpl from './Profile.hbs';
import Button from '../Button/Button';

export default function (id, first_name, email, login, phone, second_name, display_name) {

    return ProfileTmpl(
        {
            id,
            first_name,
            email,
            login,
            phone,
            second_name,
            display_name,

            btnChangePass: Button("Изменить пароль", "button__link"),
            btnLogOff: Button("Выйти", "button__link red"),
        }
    );
}
