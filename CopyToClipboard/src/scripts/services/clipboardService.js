import $ from 'jquery';
import Clipboard from 'Clipboard';
import { Selectors, Substitutes } from '../constants';

const ClipboardService = () => {
    var clipboard = new Clipboard(Selectors.BUTTON_COPY, {
        text: getText
    });

    clipboard.on('success', e => {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);

        e.clearSelection();
    });

    clipboard.on('error', e => {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });

    return clipboard;
}

const getText = trigger => {
    let li = $(trigger).closest(Selectors.LIST_ITEM);
    let name = li.find(Selectors.NAME);
    let position = li.find(Selectors.POSITION);
    let company = li.find(Selectors.COMPANY);

    return [
        sanitizeAndGetInnerHtml(name),
        sanitizeAndGetText(position),
        sanitizeAndGetInnerHtml(company)
    ].join('\t');
};

const sanitizeAndGetInnerHtml = el => {
    return (
        (!el && Substitutes.ERROR) // Element not found
        || (el && !el[0] && Substitutes.ERROR) // Element not found
        || (el && el[0] && !el[0].innerHTML.length && Substitutes.EMPTY) // Empty or blank
        || (el && el[0] && el[0].innerHTML.length && el[0].innerHTML)
    );
};

const sanitizeAndGetText = el => {
    return (
        (!el && Substitutes.ERROR) // Element not found
        || (el && el.text() && !el.text().length && Substitutes.EMPTY) // Empty or blank
        || (el && el.text() && el.text().length && el.text())
    );
};

export default ClipboardService;