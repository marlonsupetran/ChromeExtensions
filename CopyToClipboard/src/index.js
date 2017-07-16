import $ from 'jquery';
import { 
    HtmlService, 
    CopyService, 
    CopySelectedService, 
    JavascriptService 
} from './scripts/services';
import './scripts/contents.js';

$(document).ready(() => {
    console.log('Initializing copy to clipboard...');

    setTimeout(() => {
        HtmlService();
        CopyService();
        CopySelectedService();
        JavascriptService();
    }, 1000);

});
