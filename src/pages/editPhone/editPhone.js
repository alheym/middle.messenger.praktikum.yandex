import Edit from '../../components/Edit/Edit';


const EditPage = () => {

    const editPhone = [
        {
            title: 'Редактирование телефона',
            label: 'Телефон',
            name: 'phone',
            type: 'phone',
            placeholder: '+7(909) 967 30 30',
            classEdit: 'edit__phone active',
            pass: false,
        },
    ];

    const component = editPhone.map((item) => {
        return Edit(item.title, item.label, item.name, item.type, item.placeholder, item.classEdit, item.pass, item.labelNewPass, item.labelRetPass, item.placeholderNew);
    }).join('');

    return component;
};

document.querySelector('#root').innerHTML = EditPage();
