import './_error.scss';
import ErrorPageTmpl from './Error.hbs';

export default function (title, subtitle, link, linkText) {

    return ErrorPageTmpl({
        title,
        subtitle,
        link,
        linkText
    });
}
