import Edit from '../../components/Edit/Edit';


const EditPage = () => {

    const editDisplayName = [
        {
            title: 'Редактирование имени в чате',
            label: 'Имя в чате',
            name: 'display_name',
            type: 'display_name',
            placeholder: 'Иван',
            classEdit: 'edit__dsName active',
            pass: false,
        },
    ];

    const component = editDisplayName.map((item) => {
        return Edit(item.title, item.label, item.name, item.type, item.placeholder, item.classEdit, item.pass, item.labelNewPass, item.labelRetPass, item.placeholderNew);
    }).join('');

    return component;
};

document.querySelector('#root').innerHTML = EditPage();
