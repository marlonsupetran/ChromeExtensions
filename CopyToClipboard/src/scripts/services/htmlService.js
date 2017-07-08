import $ from 'jquery';
import { Selectors } from '../constants';

const htmlService = () => {

    // Inject header actions...
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
    $(Selectors.RESULTS_HEADER).after(header);

    // Inject list item actions...
    var actionsContainer = $(`
            <section class="ctc-actions">
            </section>
        `);
    var copyButton = $(`
            <div class="ctc-container ctc-container-actions">
                <span>Copy to clipboard:</span>
                <span>
                    <input type="checkbox" name="select" id="ctc-select" class="ctc-select">
                    <label for="ctc-select" class="ctc-select disable-select">Select</label>
                </span>
                <span class="clickable">
                    <a class="ctc-copy">Copy</a>
                </span>
            </div>
        `);
    actionsContainer.append(copyButton);
    $(Selectors.RESULT_LIST_CONTENT_WRAPPER).append(actionsContainer);

    // Inject member Id
    $('section.ctc-actions').each((index, el) => {
        var section = $(el);
        var memberId = section
            .prev(Selectors.INFO_CONTAINER)
            .find(Selectors.MEMBER_ID)
            .val();
        section.attr('id', memberId);
        section.find('input.ctc-select').attr('id', `ctc-select-${memberId}`);
        section.find('label.ctc-select').attr('for', `ctc-select-${memberId}`);
    });
}

export default htmlService; 