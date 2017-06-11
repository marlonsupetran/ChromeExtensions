import $ from 'jquery';
import Clipboard from 'Clipboard';
import { Selectors } from '../constants';

const ClipboardService = () => {
    var clipboard = new Clipboard(Selectors.BUTTON_COPY, {
        text: trigger => {
            let li = $(trigger).closest(Selectors.LIST_ITEM);
            let name = li.find(Selectors.NAME);
            let position = li.find(Selectors.POSITION);
            let company = li.find(Selectors.COMPANY);

            return [
                name[0].innerHTML,
                position.text(),
                company[0].innerHTML
            ].join('\t');
        }
    });

    clipboard.on('success', function (e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);

        e.clearSelection();
    });

    clipboard.on('error', function (e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });

    return clipboard;
}

export default ClipboardService;