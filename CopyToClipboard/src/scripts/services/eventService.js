import $ from 'jquery';
import { Selectors } from '../constants';

const onSelect = (trigger) => {
    var header = $(trigger).closest(Selectors.CTC_HEADER);
    console.log(header);
}

export default onSelect;