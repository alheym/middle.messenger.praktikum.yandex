import './index.scss';
import { Signin } from './pages/signin/signin';
import { Signup } from './pages/signup/signup';
import { Chat } from './pages/chat/chat';
import { NotFound } from './pages/404/404';
import { ServerError } from './pages/500/500';
import { Profile } from './pages/profile/profile';
import { EditData } from './pages/editData/editData';
import { EditPass } from './pages/editPass/editPass';


window.addEventListener('DOMContentLoaded', () => {
	const root = document.querySelector('#app');
	if (window.location.pathname === '/signup') {
		const signup = new Signup();
		root!.append(signup.getContent() as HTMLElement);
	} else if (window.location.pathname === '/500') {
		const error500 = new ServerError();
		root!.append(error500.getContent() as HTMLElement);
	} else if (window.location.pathname === '/404') {
		const error404 = new NotFound();
		root!.append(error404.getContent() as HTMLElement);
	}
	else if (window.location.pathname === '/profile') {
		const profile = new Profile();
		root!.append(profile.getContent() as HTMLElement);
	}
	else if (window.location.pathname === '/editData') {
		const editData = new EditData();
		root!.append(editData.getContent() as HTMLElement);
	}
	else if (window.location.pathname === '/editPass') {
		const editPass = new EditPass();
		root!.append(editPass.getContent() as HTMLElement);
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
