enum METHOD {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
}

type Options = {
	method: METHOD;
	data?: any;
	headers?: any;
	timeout?: number;
};

export default class HTTPTransport {
	static API_URL = 'https://ya-praktikum.tech/api/v2';
	protected endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
	}

	public get<Response>(path = '/'): Promise<Response> {
		return this.request<Response>(this.endpoint + path);
	}

	public post<Response = void>(path: string, data?: unknown): Promise<Response> {
		return this.request<Response>(this.endpoint + path, {
			method: METHOD.POST,
			data,
		});
	}

	public put<Response = void>(path: string, data: unknown): Promise<Response> {
		return this.request<Response>(this.endpoint + path, {
			method: METHOD.PUT,
			data,
		});
	}

	public patch<Response = void>(path: string, data: unknown): Promise<Response> {
		return this.request<Response>(this.endpoint + path, {
			method: METHOD.PATCH,
			data,
		});
	}

	public delete<Response>(path: string, data?: unknown): Promise<Response> {
		return this.request<Response>(this.endpoint + path, {
			method: METHOD.DELETE,
			data
		});
	}

	private request<Response>(url: string, options: Options = { method: METHOD.GET }): Promise<Response> {
		const { method, data } = options;
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open(method as METHOD, url);

			// @ts-ignore
			xhr.onreadystatechange = (e: any) => {

				if (xhr.readyState === XMLHttpRequest.DONE) {
					if (xhr.status < 400) {
						resolve(xhr.response);
					} else {
						reject(xhr.response);
					}
				}
			};

			xhr.onabort = () => reject({ reason: 'abort' });
			xhr.onerror = () => reject({ reason: 'network error' });
			xhr.ontimeout = () => reject({ reason: 'timeout' });

			xhr.withCredentials = true;
			xhr.responseType = 'json';

			if (method === METHOD.GET || !data) {

				xhr.send();
			} else if (data instanceof FormData) {
				xhr.send(data);
			} else {
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.send(JSON.stringify(data));
			}
		});
	}
}
