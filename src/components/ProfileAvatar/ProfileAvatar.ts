import './_profileAvatar.scss';
import template from './ProfileAvatar.hbs';
import Block from '../../utils/Block';


interface IProfileAvatar {
	type?: string,
	display_name: string,
}

export class ProfileAvatar extends Block<IProfileAvatar> {
	constructor(props: IProfileAvatar) {
		super({ type: 'profileAvatar', ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
