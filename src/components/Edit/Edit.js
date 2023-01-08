import './_edit.scss';
import EditTmpl from './Edit.hbs';
import Button from '../Button/Button';

export default function (title, label, type, placeholder, classEdit, pass, labelNewPass, labelRetPass, placeholderNew) {
    return EditTmpl(
        {
            title,
            label,
            type,
            placeholder,
            classEdit,
            pass,
            labelNewPass, 
            labelRetPass, 
            placeholderNew,

            btnSave: Button("Сохранить", "button__edit"),
            btnCancel: Button("Отмена", "button__edit"),
        }
    );
}