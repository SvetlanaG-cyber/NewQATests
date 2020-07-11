import sel from '../selectors/login-page.sel';
import exp from '../expected/login.exp';
import {assert} from 'chai';
import Base from './base';

class Login extends Base {

    loginPageDisplayed() {
        this.openBase();
        let elem = $(sel.loginMain).isDisplayed();
        assert.equal(elem, true)

    }

    loginPageBgImage() {
        let elem = $(sel.loginBackground).getCSSProperty('background-image');
        assert.equal(elem.value, exp.loginBgImageUrl);
    }

    loginPageBgHeight() {
        let elem = $(sel.loginBackground).getCSSProperty('height');
        assert.equal(elem.value, exp.loginBgHeight);
    }

    loginPageBgWidth() {
        let elem = $(sel.loginBackground).getCSSProperty('width');
        assert.equal(elem.value, exp.loginBgWidth);
    }

    loginPageBgPosition() {
        let elem = $(sel.loginBackground).getCSSProperty('position');
        assert.equal(elem.value, exp.loginBgPosition);
    }

    loginPageBgTextSize() {
        let elem = $(sel.loginBackground).getCSSProperty('text-size-adjust');
        assert.equal(elem.value, exp.loginBgTextSizeAdjust);
    }

    
    loginFormBgColor() {
        let elem = $(sel.loginForm).getCSSProperty('background-color');
        assert.equal(elem.value, exp.loginFormBgColor);
    }

    loginFormBgWidth() {
        let elem = $(sel.loginForm).getCSSProperty('width');
        assert.equal(elem.value, exp.loginFormWidth);
    }

    loginFormTextSize() {
        let elem = $(sel.loginForm).getCSSProperty('text-size-adjust');
        assert.equal(elem.value, exp.loginFormTextSizeAdjust);
    }

    
    loginFormPaddingBottom() {
        let elem = $(sel.loginForm).getCSSProperty('padding-bottom');
        assert.equal(elem.value, exp.loginFormPaddingBottom);
    }

    loginFormPaddingLeft() {
        let elem = $(sel.loginForm).getCSSProperty('padding-left');
        assert.equal(elem.value, exp.loginFormPaddingleft);
    }

    loginFormPaddingRight() {
        let elem = $(sel.loginForm).getCSSProperty('padding-right');
        assert.equal(elem.value, exp.loginFormPaddingRight);
    }

    loginFormPaddingTop() {
        let elem = $(sel.loginForm).getCSSProperty('padding-top');
        assert.equal(elem.value, exp.loginFormPaddingTop);
    }

    loginFormTitle1TextDisplayed() {
        let elem = $(sel.loginFormTitle1).isDisplayed();
        assert.equal(elem, true);
    }

    loginFormTitle1TextColor() {
        let elem = $(sel.loginFormTitle1).getCSSProperty('color');
        console.log(elem)
        assert.equal(elem.value, exp.loginFormTitle1Color);
    }

    loginFormTitle1TextFontSize() {
        let elem = $(sel.loginFormTitle1).getCSSProperty('font-size');
        console.log(elem)
        assert.equal(elem.value, exp.loginFormTitle1TextFontSize);
    }

    loginFormTitle1TextAttribute() {
        let elem = getElementAttribute($(sel.loginFormTitle1),);
        console.log(elem)
        assert.equal(elem.value, exp.loginFormTitle1TextAttribute);
    }

    loginFormTitle1TextFontWeight() {
        let elem = $(sel.loginFormTitle1).getCSSProperty('font-weight');
        console.log(elem)
        assert.equal(elem.value, exp.loginFormTitle1TextFontWeight);
    }

    loginFormTitle1TextLineHeight() {
        let elem = $(sel.loginFormTitle1).getCSSProperty('line-height');
        console.log(elem)
        assert.equal(elem.value, exp.loginFormTitle1TextLineHeight);
    }

    loginFormTitle1TextMarginTop() {
        let elem = $(sel.loginFormTitle1).getCSSProperty('margin-top');
        assert.equal(elem.value, exp.loginFormTitle1TextMarginTop);
    }

    loginFormTitle1TextMarginBottom() {
        let elem = $(sel.loginFormTitle1).getCSSProperty('margin-bottom');
        assert.equal(elem.value, exp.loginFormTitle1TextMarginBottom);
    }

    loginFormUsernamePlaceholder() {
        let userPlaceholder = $(sel.loginInputGroupUs).isDisplayed();
        console.log(userPlaceholder)
        assert.equal(userPlaceholder, true);
    }

    loginFormPasswordPlaceholder() {
        let passwordPlaceholder = $(sel.loginInputGroupPas).isDisplayed();
        assert.isTrue(passwordPlaceholder);
    }

    
/*
    formDisplayed() {
        $(sel.form).isDisplayed();
    }

    usernameDisplayed() {
        $(sel.email).isDisplayed();
    }

    passFieldDisplayed() {
        $(sel.pass).isDisplayed();
    }

    loginBtnDisplayed() {
        $(sel.btnLogin).isDisplayed();
    }

    remindPassLinkDisplayed() {
        $(sel.btnReminder).isDisplayed();
    }

    emailPlaceholder() {
        let ePlacehold = $(sel.email).getAttribute('placeholder');
        assert.equal(ePlacehold, exp.usernamePlaceholder);
    }

    passPlaceholder() {
        let pPlace = $(sel.pass).getAttribute('placeholder');
        assert.equal(pPlace, exp.passPlaceholder);
    }

    errorText() {
        let error = $(sel.errorText).getText();
        assert.equal(error, exp.errorText);
    }

    errorColor() {
        assert.equal($(sel.errorText).getCSSProperty('color').parsed.rgba, exp.userNotExistColor);
    }

    copyPastOff() {
        let pass = $(sel.pass).getAttribute('type');
        assert.equal(pass, 'password')
    }

    passIncorrect() {
        let username = 'moderator';
        let pas = this.randomString(15);
        $(sel.email).setValue(username);
        $(sel.pass).setValue(pas);
        $(sel.btnLogin).click();
        $(sel.errorText).waitForDisplayed();
    }

    remindBtnFunc() {
        $(sel.btnReminder).click();
        let titlePage = browser.getUrl();
        assert.equal(titlePage, exp.urlRemind);
        $(headSel.logInBtn).click();
        $(sel.logo).waitForDisplayed();
    }

    responceSpiner() {
        $(sel.email).setValue(this.randomString(15));
        $(sel.pass).setValue(this.randomString(15));
        $(sel.btnLogin).click();
        $(sel.spinner).waitForDisplayed(600);
    }

    reminderTxtColor() {
        let remTxtColor = $(sel.reminderTxt).getCSSProperty('color');
        assert.equal($(sel.reminderTxt).isDisplayed(), true);
    }

    reminderTxtIsCorrect() {
        let remTxtIsDisp = $(sel.reminderTxt).getText();
        assert.equal(remTxtIsDisp, exp.remText);
    }

    pageAfterLogin() {
        $(sel.pageRatings).waitForDisplayed();
    }*/

}

export default new Login();