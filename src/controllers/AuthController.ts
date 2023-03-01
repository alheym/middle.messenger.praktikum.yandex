import API, { AuthAPI, SigninData, SignupData } from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';

export class AuthController {
	_api: AuthAPI;

	constructor() {
		this._api = API;
	}

	// метод выполняет вход пользователя, вызывая signin метод для _api объекта и передавая dataаргумент.
	async signin(data: SigninData) {
		try {
			await this._api.signin(data);
			await this.fetchUser();
			// если успешно перенаправленеи по маршруту /messenger
			setTimeout(() => location.reload(), 500);
			router.go('/messenger');
		} catch (e: any) {
			// в случае ошибки вывод в консоль
			console.error(e);
		}
	}

	// аналогичный метод для регистрации
	async signup(data: SignupData) {
		try {
			await this._api.signup(data);
			await this.fetchUser();
			// setTimeout(() => location.reload(), 500);
			// router.go('/profile');

		} catch (e: any) {
			console.error(e.message);
		}
	}

	// метод извлекает пользовательские данные, вызывая read метод _api объекта. Возвращенные данные сохраняются в store объекте.
	async fetchUser() {
		const user = await this._api.read();
		store.set('user', user);
		// console.log(store);
	}

	// этот метод выполняет выход пользователя из системы, вызывая logout метод _api объекта.
	async logout() {
		try {
			await this._api.logout();
			// перенаправление на домашнюю страницу в случае успеха
			router.go('/');

		} catch (e: any) {
			console.error(e.message);
		}
	}

	async back() {
		try {
			router.back();
		} catch (e: any) {
			console.error(e.message);
		}
	}
	async forward() {
		try {
			router.forward();
		} catch (e: any) {
			console.error(e.message);
		}
	}
}

export default new AuthController()
