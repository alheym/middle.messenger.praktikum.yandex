import Edit from '../../components/Edit/Edit';


const EditPage = () => {

    const editLogin = [
        {
            title: 'Редактирование логина',
            label: 'Логин',
            name: 'login',
            type: 'login',
            placeholder: 'ivanivanov',
            classEdit: 'edit__login active',
            pass: false,
        },
    ];

    const component = editLogin.map((item) => {
        return Edit(item.title, item.label, item.name, item.type, item.placeholder, item.classEdit, item.pass, item.labelNewPass, item.labelRetPass, item.placeholderNew);
    }).join('');

    return component;
};

document.querySelector('#root').innerHTML = EditPage();
