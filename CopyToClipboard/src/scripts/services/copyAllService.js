import $ from 'jquery';
import { DomHelper } from '../helpers';
import { ClipboardFactory } from '../factories';
import { Selectors } from '../constants';

const copyAllService = () => {
    return ClipboardFactory.create(Selectors.CTC_LINK_COPY_ALL, getAllText);
}

const getAllText = trigger => {

};

export default copyAllService;