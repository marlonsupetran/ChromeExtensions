import $ from 'jquery';
import { 
    HtmlService, 
    CopyService, 
    CopyAllService, 
    onSelect 
} from './scripts/services';
import './scripts/contents.js';

$(document).ready(() => {
    console.log('Initializing copy to clipboard...');

    setTimeout(() => {
        HtmlService();
        CopyService();
        CopyAllService();
        onSelect();
    }, 1000);

});
