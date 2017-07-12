import { Substitutes } from '../constants';

const domHelper = {
    sanitizeAndGetInnerHtml: el => {
        return (
            (!el && Substitutes.ERROR) // Element not found
            || (el && !el[0] && Substitutes.ERROR) // Element not found
            || (el && el[0] && !el[0].innerHTML.length && Substitutes.EMPTY) // Empty or blank
            || (el && el[0] && el[0].innerHTML.length && el[0].innerHTML)
        );
    },
    sanitizeAndGetText: el => {
        return (
            (!el && Substitutes.ERROR) // Element not found
            || (el && el.text() && !el.text().length && Substitutes.EMPTY) // Empty or blank
            || (el && el.text() && el.text().length && el.text())
        );
    }
};

export default domHelper;