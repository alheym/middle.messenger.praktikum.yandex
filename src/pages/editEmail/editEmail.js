import Edit from '../../components/Edit/Edit';


const EditPage = () => {

    const editEmail = [
        {
            title: 'Редактирование почты',
            label: 'Почта',
            name: 'email',
            type: 'email',
            placeholder: 'pochta@yandex.ru',
            classEdit: 'edit__email active',
            pass: false,
        }
    ];
    const component = editEmail.map((item) => {
        return Edit(item.title, item.label, item.name, item.type, item.placeholder, item.classEdit, item.pass, item.labelNewPass, item.labelRetPass, item.placeholderNew);
    }).join('');

    return component;
};

document.querySelector('#root').innerHTML = EditPage();
