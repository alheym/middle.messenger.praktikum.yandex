import Edit from '../../components/Edit/Edit';


const EditPage = () => {

        editPass = [
            {
                title: 'Старый пароль',
                label: 'Старый пароль',
                name: 'password',
                type: 'password',
                placeholder: '•••••••••',
                classEdit: 'edit__password active',
                pass: true,
                labelNewPass: 'Новый пароль',
                labelRetPass: 'Повторите пароль',
                placeholderNew: '•••••••••••',
            },
        ];

    const component = editPass.map((item) => {
        return Edit(item.title, item.label, item.name, item.type, item.placeholder, item.classEdit, item.pass, item.labelNewPass, item.labelRetPass, item.placeholderNew);
    }).join('');

    return component;
};

document.querySelector('#root').innerHTML = EditPage();
