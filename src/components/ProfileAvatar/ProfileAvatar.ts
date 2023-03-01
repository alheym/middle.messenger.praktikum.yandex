import './_profileAvatar.scss';
import template from './ProfileAvatar.hbs';
import Block from '../../utils/Block';

type PhotoInputProps = {
	type?: string,
	value?: string;
	display_name?: string;
	imageAlt?: string;
	classInput?: string;
	loadedImage?: File;
	name?: string;
	events?: {
		click: () => void;
	};
};

export class ProfileAvatar extends Block<PhotoInputProps> {
	constructor(props: PhotoInputProps) {
		super({ type: 'profileAvatar', ...props });
	}

	getValue() {
		return this.props.loadedImage;
	}

	setValue(e: Event) {
		if (e.target instanceof HTMLInputElement) {
			const target = e.target as HTMLInputElement;

			if (target.files && target.files.length) {
				this.setProps({ loadedImage: target.files[0], value: URL.createObjectURL(target.files[0]) })
			}
		}
	}

	render() {
		return this.compile(template, { ...this.props })
	}
}

