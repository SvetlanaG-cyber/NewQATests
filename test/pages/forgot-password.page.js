import sel from '../selectors/forgot-password.sel';
import exp from '../expected/forgot-password.exp';
import data from '../data/tester.data';
import {assert} from 'chai';
import Base from './base';

class ForgotPassword extends Base {


    forgotPasswordPageDisplayed() {
        this.openForgotFassword();
        $$(sel.textForgotPassword)[0].waitForDisplayed();
        let elem = $$(sel.textForgotPassword)[0].getText()
        assert.equal(elem, exp.textForgotPassword);

    }

    forgotPasswordTitle1TextDisplayed() {
        let elem = $$(sel.title1)[0].isDisplayed();
        assert.equal(elem, true);
    }

    forgotPasswordTitle2TextDisplayed() {
        let elem = $$(sel.textForgotPassword)[0].isDisplayed();
        assert.equal(elem, true);
    }

    forgotPasswordPage2botton() {
        let elem = $$(sel.bottons).length;
        assert.equal(elem, 2);
    }

    forgotPasswordPageCancel() {
        let elem = $$(sel.bottons)[0].isDisplayed();
        assert.equal(elem, true);
    }

    forgotPasswordPageContinue() {
        let elem = $$(sel.bottons)[1].isDisplayed();
        assert.equal(elem, true);
    }

    emailInputBoxIsDisplayd() {
        let elem = $(sel.usernameInputBox).isDisplayed();
        assert.equal(elem, true);

    }

    iconInputBoxIsDisplayd() {
        let elem = $$(sel.iconUsername)[0].isDisplayed();
        assert.equal(elem, true);

    }

    labelInputBox() {
        let elem = $$(sel.label)[0].isDisplayed();
        assert.equal(elem, true);
    
    }

    linkIForgotMyUsername() {
        let elem = $$(sel.linkIForgot)[0].isDisplayed();
        assert.equal(elem, true);
    }

    linkIForgotUsernameRedirect(){
        $$(sel.linkIForgot)[0].click();
        let elem = $$(sel.recoverUsername)[0].getText();
        assert.equal(elem, exp.recoverUsername);
        this.openForgotFassword();
    }

    bottonCancelRedirect() {
        $$(sel.btnCancel)[0].click();
        let elem = $$(sel.btnLogin)[0].waitForDisplayed();
        assert.equal(elem, true);
        this.openForgotFassword();
    }

    bottonContinueRedirect() {
        $(sel.usernameInputBox).setValue(data.testUsername);
        $$(sel.btnContinueText)[0].click();
        let elem = $$(sel.textEmailSent)[0].getText();
        assert.equal(elem, exp.textEmailSent);
        this.openForgotFassword();
    }

    inputBoxAsseptsUsername() {
        $(sel.usernameInputBox).setValue(' ');
        $(sel.usernameInputBox).setValue('@');
        $$(sel.bottons)[1].click();
        let elem = $$(sel.textEmailSent)[0].getText();
        assert.equal(elem, exp.textEmailSent)
    }


    cancelBottonBGColor() {
        let elem = $$(sel.btnBg)[0].getCSSProperty('background-color');
        assert.equal(elem.value, exp.btnCanselBg);
    }

    errorTextColor() {
        this.clearInputField()
        $$(sel.btnCancel)[1].click();
        let elem = $$(sel.textMessageColor)[0].getCSSProperty('background-color');
        assert.equal(elem.value, exp.textMessageColor)
        this.openForgotFassword();
    
    }  

    continueBottonBgColor() {
        let elem = $$(sel.btnBg)[1].getCSSProperty('background-color');
        assert.equal(elem.value, exp.btnContinueBg);
    }

    continueBottonText() {
        let elem = $$(sel.btnContinueText)[0].getText();
        assert.equal(elem, exp.continueText);
    }

    cancelBottonText() {
        let elem = $$(sel.btnCancel)[0].getText();
        assert.equal(elem, exp.cancelText);
    }

    
}

export default new ForgotPassword();
