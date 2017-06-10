import './imports.js';
import $ from 'jquery';

console.log('Starting WebScraper...');

$(document).ready(function () {
    $('.actions')
        .append('<div class="ctc-actions"><button name="copy">Copy</button></div>');

    $('.ctc-actions')
        .click(e => {
            let li = e.target.closest('li.result.loading.member');
            
            console.log($(li).find('a.name-link.profile-link').text());
        });
});

