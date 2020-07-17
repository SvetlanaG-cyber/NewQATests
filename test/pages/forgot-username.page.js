import sel from '../selectors/forgot-username.sel';
import exp from '../expected/forgot-username.exp';
import {assert} from 'chai';
import Base from './base';
import data from '../data/tester.data';

class ForgotUsername extends Base {

    forgotUsernamePageDisplayed() {
        this.openForgotUsername();
        let elem = $$(sel.forgotUsernamePage)[0].waitForDisplayed();
        assert.equal(elem, true);

    }

    forgotUsernameTitle1TextDisplayed() {
        let elem = $$(sel.title1)[0].isDisplayed();
        assert.equal(elem, true);
    }

    forgotUsernameTitle2TextDisplayed() {
        let elem = $$(sel.title1)[0].isDisplayed();
        assert.equal(elem, true);
    }

    forgotUsernamePage2botton() {
        let elem = $$(sel.bottons).length;
        assert.equal(elem, 2);
    }

    forgotUsernamePageBack() {
        let elem = $$(sel.bottons)[0].isDisplayed();
        assert.equal(elem, true);
    }

    forgotUsernamePageRecover() {
        let elem = $$(sel.btnRecover)[1].isDisplayed();
        assert.equal(elem, true);
    }

    emailInputBoxIsDisplayd() {
        let elem = $$(sel.email)[0].isDisplayed();
        assert.equal(elem, true);

    }

    iconInputBoxIsDisplayd() {
        let elem = $$(sel.icon)[0].isDisplayed();
        assert.equal(elem, true);

    }

    labelInputBox() {
        let elem = $$(sel.labelInputBox)[0].isDisplayed();
        assert.equal(elem, true);
    
    }

    linkIForgotMyPassword() {
        let elem = $$(sel.labelInputBox)[1].isDisplayed();
        assert.equal(elem, true);
    }

    linkIForgotMyPasswordRedirect() {
        $$(sel.labelInputBox)[1].click();
        let elem = $$(sel.titleText)[0].getText();
        assert.equal(elem,  exp.forgotPasswordPage);
        this.openForgotUsername();
        
    }

    bottonBackRedirect() {
        $$(sel.btnBack)[0].click();
        let elem = $$(sel.btnLogin)[0].waitForDisplayed();
        assert.equal(elem, true);
        this.openForgotUsername();

    }

    bottonRecoverError() {
        $(sel.email).addValue(data.testPassword);

        $$(sel.btnRecover)[1].click();
        let elem = $$(sel.errorMessage)[0].getText();
        assert.equal(elem, exp.errorMessage)
        this.openForgotUsername()
    }

    backBottonColor() {
        let elem =$$(sel.btnBack)[0].getCSSProperty('color');
        assert.equal(elem.value, exp.btnBackColor);
    }

    bottonRecoverErrorTextColor() {
        $(sel.email).addValue(data.testPassword);
        

        $$(sel.btnRecover)[1].click();
        let elem = $$(sel.errorMessage)[0].getCSSProperty('color');
        assert.equal(elem.value, exp.messageColor)

        
    }  

    recoverBottonColor() {
        let elem = $$(sel.btnRecover)[0].getCSSProperty('color');
        assert.equal(elem.value, exp.btnBackColor);
    }

    recoverBottonText() {
        let elem = $$(sel.bottons)[1].getText();
        assert.equal(elem.value, exp.textRecover);
    }

    backBottonText() {
        let elem = $$('body div:nth-child(2) button')[0].getText();
        assert.equal(elem.value, exp.textBack);
    }

}

export default new ForgotUsername();
