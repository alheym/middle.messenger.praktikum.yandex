import './_profile.scss';
import ProfileTmpl from './Profile.hbs';
import Button from '../../components/Button/Button';

export default function (id, profileName, email, login, phone, second_name) {

    return ProfileTmpl(
        {
            id,
            profileName,
            email,
            login,
            phone,
            second_name,

            btnChangePass: Button("Изменить пароль", "button__link"),
            btnLogOff: Button("Выйти", "button__link red"),
        }
    );
}