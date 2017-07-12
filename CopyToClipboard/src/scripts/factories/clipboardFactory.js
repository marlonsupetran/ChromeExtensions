import Clipboard from 'Clipboard';

const clipboardFactory = {
    create: (selector, getText) => {
        var cb = new Clipboard(selector, {
            text: getText
        });

        cb.on('success', e => {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);

            e.clearSelection();
        });

        cb.on('error', e => {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });

        return cb;
    }
}

export default clipboardFactory;