import Chat from '../../modules/chat/chat';

const ChatPage = () => {

    const component = Chat();

    return component;
};

document.querySelector('#root').innerHTML = ChatPage();

const hamburger = document.querySelector('.chat__hamburger'),
    menu = document.querySelector('.chat__menu'),
    editEmail = document.querySelector('.edit__email'),
    editLogin = document.querySelector('.edit__login'),
    editPhone = document.querySelector('.edit__phone'),
    editName = document.querySelector('.edit__name'),
    editScName = document.querySelector('.edit__scName'),
    editPass = document.querySelector('.edit__password'),
    emailItem = document.querySelector('.email'),
    loginItem = document.querySelector('.login'),
    phoneItem = document.querySelector('.phone'),
    nameItem = document.querySelector('.first_name'),
    scNameItem = document.querySelector('.second_name'),
    passItem = document.querySelector('.edit_pass');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

emailItem.addEventListener('click', () => {
    editEmail.classList.add('active');
});

loginItem.addEventListener('click', () => {
    editLogin.classList.add('active');
});

phoneItem.addEventListener('click', () => {
    editPhone.classList.add('active');
});

nameItem.addEventListener('click', () => {
    editName.classList.add('active');
});

scNameItem.addEventListener('click', () => {
    editScName.classList.add('active');
});

passItem.addEventListener('click', () => {
    editPass.classList.add('active');
});

document.addEventListener('click', (e) => {
    let target = e.target,
        its_menu = target == menu || menu.contains(target),
        its_hamburger = target == hamburger,
        menu_is_active = menu.classList.contains('active');

    if (!its_menu && !its_hamburger && menu_is_active) {
        menu.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && menu.classList.contains('active') || e.code === 'Escape' && editEmail.classList.contains('active') || e.code === 'Escape' && editLogin.classList.contains('active') || e.code === 'Escape' && editPhone.classList.contains('active') || e.code === 'Escape' && editName.classList.contains('active') || e.code === 'Escape' && editScName.classList.contains('active') || e.code === 'Escape' && editPass.classList.contains('active')) {
        menu.classList.remove('active'),
            editEmail.classList.remove('active'),
            editLogin.classList.remove('active'),
            editPhone.classList.remove('active'),
            editName.classList.remove('active'),
            editScName.classList.remove('active'),
            editPass.classList.remove('active');
    }
});