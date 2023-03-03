import './index.scss';
import { Signin } from './pages/signin/signin';
import { Signup } from './pages/signup/signup';
import { Chats } from './pages/chat/chat';
import { NotFound } from './pages/404/404';
import { ServerError } from './pages/500/500';
import { ProfileData } from './pages/profile/profile';
import { EditsData } from './pages/editData/editData';
import { EditsPass } from './pages/editPass/editPass';
import Router from './utils/Router';
import AuthController from './controllers/AuthController';
import ChatController from './controllers/ChatController';

export enum ROUTES {
	Home = '/',
	Signup = '/sign-up',
	Profile = '/profile',
	Chats = '/messenger',
	NotFound = '/404',
	ServerError = '/500',
	EditData = '/settings',
	EditPass = '/editPass',
}

window.addEventListener('DOMContentLoaded', async () => {
	Router
		.use(ROUTES.Home, Signin)
		.use(ROUTES.Signup, Signup)
		.use(ROUTES.Chats, Chats)
		.use(ROUTES.Profile, ProfileData)
		.use(ROUTES.EditData, EditsData)
		.use(ROUTES.EditPass, EditsPass)
		.use(ROUTES.NotFound, NotFound)
		.use(ROUTES.ServerError, ServerError);

	let isProtectedRoute = true;

	// eslint-disable-next-line default-case
	switch (window.location.pathname) {
	case ROUTES.Home:
	case ROUTES.Signup:
		isProtectedRoute = false;
		break;
	}

	try {
		await AuthController.fetchUser();
		await ChatController.getChats();

		Router.start();

		if (!isProtectedRoute) {
			Router.go(ROUTES.Chats);
		}
	} catch (e) {
		Router.start();

		if (isProtectedRoute) {
			Router.go(ROUTES.Home);
		}
	}
});
