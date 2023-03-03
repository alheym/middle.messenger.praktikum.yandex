import BaseAPI from './BaseAPI';

export interface EditUser {
	first_name: string;
	second_name: string;
	display_name: string;
	login: string;
	email: string;
	phone: string;
}

export interface EditPassword {
	oldPassword: string;
	newPassword: string;
}

export interface User {
	id: number;
	first_name: string;
	second_name: string;
	login: string;
	email: string;
	password: string;
	phone: string;
	avatar: string;
	[propName: string]: any;
}

export class UserAPI extends BaseAPI {
	constructor() {
		super('/user');
	}

	editUser(data: EditUser) {
		return this.http.put('/profile', data);
	}

	editPass(data: EditPassword) {
		return this.http.put('/password', data);
	}

	editAvatar(data: any) {
		return this.http.put('/profile/avatar', data);
	}

	read(): Promise<User> {
		return this.http.get('/auth/user');
	}

	search(data: Record<'login', string>): Promise<User[]> {
		return this.http.post('/search', data);
	}

	logout() {
		return this.http.post('/logout');
	}

	create = undefined;

	update = undefined;

	delete = undefined;
}

export default new UserAPI();
