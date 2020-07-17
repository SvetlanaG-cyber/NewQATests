import sel from '../selectors/browser.sel'
import exp from '../expected/browser.exp'
import { assert } from 'chai'
class Browse {

    title() {
        browser.url('/');
        browser.pause(10000);
        let elem = $(sel.title).getText();
        assert.equal(elem, exp.titleText);
    }
    headerDisplayed() {
        $(sel.header).isDisplayed();
    }
    appPageConteinerDisplayed() {
        $(sel.appPageConteiner).isDisplayed();
    }
    footerDisplayed() {
        $(sel.footer).isDisplayed();
    }
}
export default new Browse();