import './imports.js';
import $ from 'jquery';
import Clipboard from 'Clipboard';

console.log('Copy to clipboard has started.');

$(document).ready(function () {

    // Create html elements to be injected
    var actions = $(`<div class="ctc-actions"></div>`);
    var buttonCopy = $(`
        <button class="ctc-copy">
            Copy
        </button>
    `);
    actions.append(buttonCopy);

    // Append to page
    $('.actions').append(actions);

    // $('.ctc-copy')
    //     .click(e => {
    //         const li = e.target.closest('li.result.loading.member');
    //         const name = $(li).find('a.name-link.profile-link').text();
    //         console.log(name);
    //     });

    var clipboard = new Clipboard('.ctc-copy', {
        text: trigger => {
            let li = $(trigger).closest('li.result.loading.member');
            let name = li.find('a.name-link.profile-link');
            let position = li.find('p.info-value:first-child');
            let company = li.find('a.company-name.company-link');

            return [name[0].innerHTML, position.text(), company[0].innerHTML].join('\t');
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
});

