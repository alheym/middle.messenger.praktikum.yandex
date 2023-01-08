import Edit from '../../components/Edit/Edit';


const EditPage = () => {

    const editSecondName = [
        {
            title: 'Редактирование фамилии',
            label: 'Фамилия',
            name: 'second_name',
            type: 'second_name',
            placeholder: 'Иванов',
            classEdit: 'edit__scName active',
            pass: false,
        },
    ];

    const component = editSecondName.map((item) => {
        return Edit(item.title, item.label, item.name, item.type, item.placeholder, item.classEdit, item.pass, item.labelNewPass, item.labelRetPass, item.placeholderNew);
    }).join('');

    return component;
};

document.querySelector('#root').innerHTML = EditPage();
