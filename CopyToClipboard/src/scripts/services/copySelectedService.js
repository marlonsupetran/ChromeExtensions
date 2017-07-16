import $ from 'jquery';
import { DomHelper } from '../helpers';
import { ClipboardFactory } from '../factories';
import { Selectors } from '../constants';

const copySelectedService = () => {
    return ClipboardFactory.create(Selectors.CTC_LINK_COPY_ALL, getAllText);
}

const getAllText = trigger => {
    var lineCount = 0
    var text = '';

    $(Selectors.LIST_ITEM).each((i, e) => {
        const li = $(e);

        // Check if checkbox is ticked...
        if (li.find(Selectors.CTC_CHECKBOX_SELECT).is(':checked'))
        {
            let name = li.find(Selectors.NAME);
            let position = li.find(Selectors.POSITION);
            let company = li.find(Selectors.COMPANY);

            text += [
                DomHelper.sanitizeAndGetInnerHtml(name),
                DomHelper.sanitizeAndGetText(position),
                DomHelper.sanitizeAndGetInnerHtml(company)
            ].join('\t') + '\n';

            lineCount++;
        }
    });

    if (!lineCount)
    {
        alert(`You have not selected any items to copy!`);
    }

    return text;
};

export default copySelectedService;