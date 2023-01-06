import Chat from '../../modules/chat/chat';

const ChatPage = () => {

    const component = Chat();

    return component;
};

document.querySelector('#root').innerHTML = ChatPage();

const hamburger = document.querySelector('.chat__hamburger'),
      menu = document.querySelector('.chat__menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

document.addEventListener('click', (e) => {
    let target = e.target;
    let its_menu = target === menu || menu.contains(target);
    let its_hamburger = target === hamburger;
    let menu_is_active = menu.classList.contains('active');
    
    if (!its_menu && !its_hamburger && menu_is_active) {
        menu.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});