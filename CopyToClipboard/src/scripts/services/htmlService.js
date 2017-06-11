import $ from 'jquery';
import { Selectors } from '../constants';

const htmlService = () => {

    // Create html elements to be injected
    var actionsContainer = $(`<div class="ctc-actions"></div>`);
    var copyButton = $(`
            <button class="ctc-copy">
                Copy
            </button>
        `);
    actionsContainer.append(copyButton);

    // Append to page
    $(Selectors.ACTIONS_CONTAINER).append(actionsContainer);

}

export default htmlService; 