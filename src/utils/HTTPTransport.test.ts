import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import HTTPTransport from './HTTPTransport';
import { expect } from 'chai';
import { data } from 'autoprefixer';

describe('HTTPTransport', () => {
	let xhr: SinonFakeXMLHttpRequestStatic;
	let instance: HTTPTransport;
	const requests: SinonFakeXMLHttpRequest[] = [];

	beforeEach(() => {
		xhr = sinon.useFakeXMLHttpRequest();

		// @ts-ignore
		global.XMLHttpRequest = xhr;

		xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
			requests.push(request);
		});

		instance = new HTTPTransport('/auth/user');
	});

	afterEach(() => {
		requests.length = 0;
	})

	it('.get() should send GET request', () => {
		instance.get('/user');

		const [request] = requests;

		expect(request.method).to.eq('GET');
	});

	it('.post() should send POST request', () => {
		instance.post('/auth/signin', data);

		const [request] = requests;

		expect(request.method).to.eq('POST');
	});

	it('.put() should send PUT request', () => {
		instance.put('/chats/users', data);

		const [request] = requests;

		expect(request.method).to.eq('PUT');
	});

});
