import API, { UserAPI, EditUser, EditPassword } from '../api/UserAPI';
import { User } from '../api/UserAPI';
import store from '../utils/Store';
import router from '../utils/Router';

export class UserController {
	_api: UserAPI;

	constructor() {
		this._api = API;
	}

	async editAvatar(data: any) {
		try {
			console.log(data.get('avatar'))
			this._api.editAvatar(data);

			setTimeout(() => location.reload(), 500);
			router.go('/profile');
		} catch (e: any) {
			console.error(e);
		}
	}

	async editUser(data: EditUser) {
		try {
			const changedData: any = await this._api.editUser(data);
			if (changedData) {
				await this.fetchUser();
				setTimeout(() => location.reload(), 500);
				router.go('/profile');

			}
		} catch (e: any) {
			console.error(e);
		}
	}
	async editPass(data: EditPassword) {
		this._api.editPass(data)
			.then(() => {
				setTimeout(() => location.reload(), 500);
				router.go('/profile');
			})
			.catch((e) => {
				alert(e.reason)
			})
	}

	async messenger() {
		try {
			router.go('/messenger');
		} catch (e: any) {
			console.error(e);
		}
	}

	async fetchUser() {
		const user = await this._api.read();
		store.set('user', user);
	}

	async findUser(data: Record<'login', string>): Promise<User[]> {
		try {
			return await this._api.search(data);
		} catch (e: any) {
			console.error(e);
			return e;
		}
	}
}

export default new UserController();
