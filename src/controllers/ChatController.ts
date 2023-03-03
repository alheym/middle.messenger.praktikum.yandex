import API, {
	ChatsAPI, TypesUsersChat, TypesChat, ChatInfo,
} from '../api/ChatAPI';
import store from '../utils/Store';
import router from '../utils/Router';

class ChatController {
	_api: ChatsAPI;

	socket: WebSocket | null;

	data: any;

	constructor() {
		this._api = API;
		this.socket = null;
	}

	// метод создания нового чата
	async createChat(data: TypesChat) {
		try {
			await this._api.createChat(data);

			await this.getChats();
		} catch (e: any) {
			console.error(e);
		}
	}

	// метод получения всех чатов и сохранения их в сторе
	async getChats() {
		const chats = await this._api.read();
		store.set('allChats', chats);
	}

	getChatData(id: number) {
		const chatData = (store.getState().chats as ChatInfo[]).find((chat) => chat.id === id);
		if (!chatData) {
			throw Error('Chat not found in the list of your chats');
		}

		return chatData;
	}

	getChatUsers(id: number) {
		try {
			return this._api.getChatUsers(id);
		} catch (e: any) {
			return [];
		}
	}

	// метод для получения чата с данными id и запуска соединения, для прослушивания новых сообщений
	async getChat(id: number, userId: number, name: string) {
		const response: any = await this._api.getChat(id);
		const { token } = response;
		store.set('chatId', id);
		store.set('token', token);
		store.set('nameChat', name);

		if (this.socket) {
			this.socket.close();
			store.set('chat', { chatId: id });
		}
		this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`);

		this.socket.addEventListener('close', (event) => {
			if (event.wasClean) {
				console.log('Соединение закрыто');
			} else {
				console.log('Соединение прервано');
			}

			console.log(`Код: ${event.code} | Причина: ${event.reason}`);
		});

		this.socket.addEventListener('open', () => {
			console.log('Соединение открыто');
			// когда соединение открывается, отправляем сообщение на сервер, для извлечения старых сообщений чата
			(this.socket as WebSocket).send(JSON.stringify({
				content: '0',
				type: 'get old',
			}));
		});

		this.socket.addEventListener('message', (e) => {
			this.data = {
				...JSON.parse(e.data),
				chatId: id,
			};
			store.set('chat', JSON.parse(e.data));
		});

		this.socket.addEventListener('error', (e: any) => {
			console.log('Ошибка', e.message);
		});

		this.getChats();
	}

	async sendMessage(newMessage: string) {
		if (this.socket) {
			this.socket.send(
				JSON.stringify({
					content: newMessage,
					type: 'message',
				}),
			);
			this.socket.send(
				JSON.stringify({
					content: '0',
					type: 'get old',
				}),
			);
		}

		this.getChats();
	}

	async deleteChat(id: number) {
		try {
			await this._api.deleteChat(id);
			store.set('token', undefined);
			await this.getChats();
		} catch (e: any) {
			console.error(e);
		}
	}

	async addUser(data: TypesUsersChat) {
		try {
			await this._api.addUserToChat(data);
			await this.getChats();
		} catch (e: any) {
			console.error(e);
		}
	}

	async deleteUser(data: TypesUsersChat) {
		try {
			await this._api.deleteUserFromChat(data);
			await this.getChats();
		} catch (e: any) {
			console.error(e);
		}
	}

	deleteUserFromChat(data: TypesUsersChat) {
		return this._api.deleteUserFromChat(data);
	}

	addUserToChat(data: TypesUsersChat) {
		return this._api.addUserToChat(data);
	}

	async profile() {
		try {
			router.go('/profile');
		} catch (e: any) {
			console.error(e.message);
		}
	}
}

export default new ChatController();
