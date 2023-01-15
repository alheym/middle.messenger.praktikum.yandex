import './index.scss';
import { Signin } from './pages/signin/signin';
import { Signup } from './pages/signup/signup';

window.addEventListener('DOMContentLoaded', () => {
	const root = document.querySelector('#app');
	if (window.location.pathname === '/signup') {
	  const signup = new Signup();
	  root!.append(signup.getContent());
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
	// } else if (window.location.pathname === '/chat') {
	//   const chatPage = new ChatPage({});
	//   root!.append(chatPage.getContent());
	// }
	else {
	  const signin = new Signin();
	  root!.append(signin.getContent());
	}
  })
