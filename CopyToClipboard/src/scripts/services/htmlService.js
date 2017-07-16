import $ from 'jquery';
import { Selectors } from '../constants';

const htmlService = () => {

    // Inject header actions...
    var header = $(`
            <section class="ctc-header">
                <div class="ctc-container ctc-container-header">
                    <span>Copy to clipboard:</span>
                    <span class="ctc-select-all">
                        <input type="checkbox" name="select-all" id="ctc-select-all" class="ctc-select-all">
                        <label for="ctc-select-all" class="ctc-select-all disable-select">Select all</label>
                    </span>
                    <span class="clickable">
                        <a class="ctc-copy-all" class="ctc-copy">Copy selected</a>
                    </span>
                </div>
            </section>
        `);
    $(Selectors.RESULTS_HEADER).after(header);

    // Inject list item actions...
    var actions = $(`
            <section class="ctc-actions">
                <div class="ctc-container ctc-container-actions">
                    <span>Copy to clipboard:</span>
                        <span class="ctc-select">
                            <input type="checkbox" name="select" id="ctc-select" class="ctc-select">
                            <label for="ctc-select" class="ctc-select disable-select">Select</label>
                        </span>
                    <span class="clickable">
                        <a class="ctc-copy">Copy</a>
                    </span>
                </div>
            </section>
        `);
    $(Selectors.RESULT_LIST_CONTENT_WRAPPER).append(actions);

    // Inject member Id
    $(Selectors.CTC_HEADER).each((index, el) => {
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
