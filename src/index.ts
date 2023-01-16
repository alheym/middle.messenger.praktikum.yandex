import './index.scss';
import { Signin } from './pages/signin/signin';
import { Signup } from './pages/signup/signup';
import { Chat } from './pages/chat/chat';

window.addEventListener('DOMContentLoaded', () => {
	const root = document.querySelector('#app');
	if (window.location.pathname === '/signup') {
	  const signup = new Signup();
	  root!.append(signup.getContent() as HTMLElement);
	}
	// else if (window.location.pathname === '/500') {
	//   const error500Page = new Error500Page({});
	//   root!.append(error500Page.getContent());
	// } else if (window.location.pathname === '/profile') {
	//   const profilePage = new ProfilePage({});
	//   root!.append(profilePage.getContent());
	// } else if (window.location.pathname === '/404') {
	//   const error404Page = new Error404Page({});
	//   root!.append(error404Page.getContent());
	// }
	else if (window.location.pathname === '/chat') {
	  const chat = new Chat();
	  root!.append(chat.getContent() as HTMLElement);
	}
	else {
	  const signin = new Signin();
	  root!.append(signin.getContent() as HTMLElement);
	}
  })
