import BaseAPI from './BaseAPI';
import { User } from './AuthAPI';

// модуль для приложения обмена сообщениями
// содержит методы для создания, удаления, чтения и обновления чатов, а так же получения пользователей в чат и получения токена

export interface TypesChat {
	title: string;
}

export interface IChatMember extends User {
	role: string;
	isMember?: boolean;
}

export interface TypesUsersChat {
	users: number[]
	chatId: number
}

export interface ChatInfo {
	id: number;
	title: string;
	avatar: string;
	unread_count: number;
	created_by: number;
	last_message: {
		user: User,
		time: string;
		content: string;
	}
}

export class ChatsAPI extends BaseAPI {
	constructor() {
		super('/chats');
	}

	read(): Promise<ChatInfo> {
		return this.http.get('/');
	}

	createChat(data: TypesChat) {
		return this.http.post('/', data);
	}

	getChat(id: number) {
		return this.http.post(`/token/${id}`);
	}

	getChatUsers(identifier: number): Promise<IChatMember[]> {
		return this.http.get(`/${identifier}/users`);
	}

	deleteChat(id: number) {
		return this.http.delete('/', { chatId: id });
	}

	SearchUserChat(data: string) {
		return this.http.post('/user/search', { login: data });
	}

	addUserToChat(data: TypesUsersChat) {
		return this.http.put('/users', data);
	}

	deleteUserFromChat(data: TypesUsersChat) {
		return this.http.delete('/users', data);
	}

	create = undefined;
	update = undefined;
	delete = undefined;
}

export default new ChatsAPI();
