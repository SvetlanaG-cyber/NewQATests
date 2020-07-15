import sel from '../selectors/login-page.sel';
import exp from '../expected/login.exp';
import {assert} from 'chai';
import Base from './base';
import testerData from '../data/tester.data';

class ForgotUsername extends Base {

    forgotUsernamePageDisplayed() {
        this.openBase();
        $$('a.gg-link:nth-child(1)')[0].click()
        //this.openForgot()
        let elem = $$('body .gg-login-grid')[0].isDisplayed();
        assert.equal(elem, true)

    }

    forgotUsernameTitle1TextDisplayed() {
        let elem = $$('body .gg-login-form-title1')[0].isDisplayed();
        assert.equal(elem, true);
    }

    forgotUsernameTitle2TextDisplayed() {
        let elem = $$('body .gg-login-form-title1')[0].isDisplayed();
        assert.equal(elem, true);
    }

    forgotUsernamePage2botton() {
        let elem = $$('body div:nth-child(1) button').length;
        assert.equal(elem, 2);
    }

    forgotUsernamePageBack() {
        let elem = $$('body div:nth-child(1) button')[0].isDisplayed();
        assert.equal(elem, true);
    }

    forgotUsernamePageRecover() {
        let elem = $$('body div:nth-child(1) button')[1].isDisplayed();
        assert.equal(elem, true);
    }

    emailInputBoxIsDisplayd() {
        let elem = $$('#Email')[0].isDisplayed();
        assert.equal(elem, true);

    }

    iconInputBoxIsDisplayd() {
        let elem = $$('.gg-input-el-group svg')[0].isDisplayed();
        assert.equal(elem, true);

    }

    labelInputBox() {
        let elem = $$('fieldset label')[0].isDisplayed();
        assert.equal(elem, true);
    
    }

    linkIForgotMyPassword() {
        let elem = $$('fieldset label')[1].isDisplayed();
        assert.equal(elem, true);
    }

    linkIForgotMyPasswordRedirect() {
        $$('fieldset label')[1].click();
        //let elem = browser.getUrl()
        //assert.equal(elem, );
        let elem = $$(sel.titleText)[0].getText();
        assert.equal(elem,  exp.forgotPasswordPage);
        $$('a.gg-link:nth-child(1)')[0].click()
    }

    bottonBackRedirect() {
        $$('body div:nth-child(1) button')[0].click();
        let elem = $$(sel.loginBtnLogin)[0].waitForDisplayed();
        assert.equal(elem, true);
        $$('a.gg-link:nth-child(1)')[0].click()

        //let elem = browser.getUrl()
        //assert.equal(elem, 'https://cx-sb01-auth01.azurewebsites.net/Account/');
    }

    bottonRecoverError() {
        $('#Email').addValue('tester@tester');//(testerData.testPassword);
        //assert.equal( $$('#Email')[0].getValue().length, 100);

        $$('body div:nth-child(1) button')[1].click();
        let elem = $$('.gg-login-grid  form div')[0].getText();
        assert.equal(elem, 'An e-mail with your username has been sent to the entered e-mail address if it corresponds to an active account.')

        //let elem = browser.getUrl()
        //assert.equal(elem, 'http://oxcdemo.alluma.org/#/quick/intro');
    }

    backBottonColor() {
        let elem = $$('body div:nth-child(2) button')[0].getCSSProperty('color');
        assert.equal(elem.value, 'rgba(255,255,255,1)');
    }

    bottonRecoverErrorTextColor() {
        $('#Email').addValue('tester@tester');//(testerData.testPassword);
        //assert.equal( $$('#Email')[0].getValue().length, 100);

        $$('body div:nth-child(1) button')[1].click();
        let elem = $$('.gg-login-grid  form div')[0].getCSSProperty('color');
        assert.equal(elem.value, 'rgb(108, 59, 150)')

        //let elem = browser.getUrl()
        //assert.equal(elem, 'http://oxcdemo.alluma.org/#/quick/intro');
    }  

    recoverBottonColor() {
        let elem = $$('body div:nth-child(2) button')[1].getCSSProperty('color');
        console.log($$('body div:nth-child(2) button')[1])
        assert.equal(elem.value, 'rgba(255,255,255,1)');
    }

    recoverBottonText() {
        let elem = $$('body div:nth-child(2) button')[1].getText();
        assert.equal(elem.value, 'Recover Username');
    }

    backBottonText() {
        let elem = $$('body div:nth-child(2) button')[0].getText();
        assert.equal(elem.value, 'Back to Login');
    }

}

export default new ForgotUsername();
