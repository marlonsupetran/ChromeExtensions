import $ from 'jquery';
import { Selectors } from '../constants';

const htmlService = () => {

    // Create html elements to be injected
    var header = $(`
            <section class="ctc-header">
                <div class="ctc-container ctc-container-header">
                    <span>Copy to c lipboard:</span>
                    <span>
                        <input type="checkbox" name="select-all" id="ctc-select-all">
                        <label for="ctc-select-all" class="ctc-select-all disable-select">Select all</label>
                    </span>
                    <span class="clickable">
                        <a class="ctc-copy-all" class="ctc-copy">Copy all</a>
                    </span>
                </div>
            </section>
        `);
    var copyButton = $(`
            <div class="ctc-container ctc-container-actions">
                <span>Copy to clipboard:</span>
                <span>
                    <input type="checkbox" name="select" id="ctc-select">
                    <label for="ctc-select" class="ctc-select disable-select">Select</label>
                </span>
                <span class="clickable">
                    <a class="ctc-copy">Copy</a>
                </span>
            </div>            
        `);
    var actionsContainer = $(`
            <section class="ctc-actions">
            </section>
        `);
    actionsContainer.append(copyButton);

    // Append to page
    $(Selectors.RESULT_LIST_CONTENT_WRAPPER).append(actionsContainer);
    $(Selectors.RESULTS_HEADER).after(header);
}

export default htmlService; 