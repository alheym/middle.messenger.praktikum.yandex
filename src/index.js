import './index.scss';
import Main from './components/Main/Main.hbs';
// import SignUp from './pages/signUp/signUp';
// import Profile from './pages/profile/Profile';
import NotFound from './modules/404/404';
// import ServerError from './modules/500/500Page;
// import ChatList from './pages/chatList/ChatList';

const App = () => {

    // Handlebars.registerHelper('stringifyFunc', function(fn) {
    //     return new Handlebars.SafeString("(" +
    //         fn.toString().replace(/\"/g,"\'") + ")()");
    // });

    let component;

    switch (window.location.pathname) {
        case '/signin':{
            component = Signin();
            break;
        }
        // case '/signUp':{
        //     component = SignUp()
        //     break
        // }
        // case '/chatList':{
        //     component = ChatList()
        //     break
        // }
        // case '/profile':{
        //     component = Profile()
        //     break
        // }
        case '/notFound':{
            component = NotFound();
            break;
        }
        // case '/error':{
        //     component = ServerError500();
        //     break;
        // }
        default: {
            component = (()=>Main())();
        }
    }

    return component;
};

document.querySelector('#root').innerHTML = App();