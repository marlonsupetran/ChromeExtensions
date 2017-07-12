import $ from 'jquery';
import { DomHelper } from '../helpers';
import { ClipboardFactory } from '../factories';
import { Selectors } from '../constants';

const copyService = () => {
    return ClipboardFactory.create(Selectors.CTC_LINK_COPY, getText);
}

const getText = trigger => {
    let li = $(trigger).closest(Selectors.LIST_ITEM);
    let name = li.find(Selectors.NAME);
    let position = li.find(Selectors.POSITION);
    let company = li.find(Selectors.COMPANY);

    return [
        DomHelper.sanitizeAndGetInnerHtml(name),
        DomHelper.sanitizeAndGetText(position),
        DomHelper.sanitizeAndGetInnerHtml(company)
    ].join('\t');
};

export default copyService;