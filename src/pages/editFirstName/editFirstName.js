import Edit from '../../components/Edit/Edit';


const EditPage = () => {

    const editFirstName = [
        {
            title: 'Редактирование имени',
            label: 'Имя',
            name: 'first_name',
            type: 'first_name',
            placeholder: 'Иван',
            classEdit: 'edit__name active',
            pass: false,
        },
    ];

    const component = editFirstName.map((item) => {
        return Edit(item.title, item.label, item.name, item.type, item.placeholder, item.classEdit, item.pass, item.labelNewPass, item.labelRetPass, item.placeholderNew);
    }).join('');

    return component;
};

document.querySelector('#root').innerHTML = EditPage();
