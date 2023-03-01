import { Button } from './Button';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('Button', () => {
	it('should render', () => {
		new Button({ className: 'button__link' });
	});

	it('element should return button', () => {
		const button = new Button({ className: 'button__link' });
		const element = button.element;

		expect(element).to.be.instanceof(window.HTMLButtonElement)
	});

	it('should handle click event', () => {
		const handleClick = sinon.spy();
		const button = new Button({
			className: 'button__link',
			events: { click: handleClick },
		});
		const element = button.element;
		const event = new window.MouseEvent('click');

		if (element) {
			element.dispatchEvent(event);
			expect(handleClick).to.have.been.calledOnceWith(event);
		}

	});

});
