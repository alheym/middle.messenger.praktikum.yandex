import template from './Avatar.hbs';
import Block from '../../utils/Block';

type AvatarProps = {
	type?: string,
	value?: string;
	display_name?: string;
	imageAlt?: string;
};

export class Avatar extends Block<AvatarProps> {
	constructor(props: AvatarProps) {
		super({ type: 'profileAvatar', ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
