import { HtmlService, ClipboardService } from './scripts/services';
import { Selectors } from './scripts/constants';
import $ from 'jquery';
import './scripts/contents.js';

// chrome.runtime.onMessage.addListener((request, sender, response) => {
//     if (request.action === 'reload') {
//         console.log('Page content changed. Reloading copy to clipboard.');
//         HtmlService();
//         ClipboardService();
//     }
// });

$(document).ready(() => {
    console.log('Initializing copy to clipboard...');

    setTimeout(() => {
        HtmlService();
        ClipboardService();
    }, 1000);

});
