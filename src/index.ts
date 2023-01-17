import './index.scss';
import { Signin } from './pages/signin/signin';
import { Signup } from './pages/signup/signup';
import { Chat } from './pages/chat/chat';
import { NotFound } from './pages/404/404';
import { ServerError } from './modules/500/500';


window.addEventListener('DOMContentLoaded', () => {
	const root = document.querySelector('#app');
	if (window.location.pathname === '/signup') {
	  const signup = new Signup();
	  root!.append(signup.getContent() as HTMLElement);
	}
	else if (window.location.pathname === '/500') {
	  const error500 = new ServerError();
	  root!.append(error500.getContent() as HTMLElement);
	}
	// else if (window.location.pathname === '/profile') {
	//   const profilePage = new ProfilePage({});
	//   root!.append(profilePage.getContent());
	// }
	else if (window.location.pathname === '/404') {
	  const error404 = new NotFound();
	  root!.append(error404.getContent() as HTMLElement);
	}
	else if (window.location.pathname === '/chat') {
	  const chat = new Chat();
	  root!.append(chat.getContent() as HTMLElement);
	}
	else {
	  const signin = new Signin();
	  root!.append(signin.getContent() as HTMLElement);
	}
  })
