import data from '../data/tester.data';
import loginSel from '../selectors/login-page.sel';
import headSel from '../selectors/header.sel';
//import allPlayersSel from '../selectors/all-players-page.sel';
//import myAccountSel from '../selectors/myAccount.sel'
import exp from '../expected/base.exp';
import { assert } from 'chai';

class Base {

    openBase() {
        browser.url('/');
    }

    openForgotUsername() {
        this.openBase();
        $$('a.gg-link:nth-child(1)')[0].click();
       // browser.url('../ForgotUsername?');
        //browser.url('/Account/ForgotUsername?');
    }

    openForgotFassword() {
        this.openBase();
        $$('a.gg-link:nth-child(2)')[0].click();
        //this.openFo
        //browser.url('/Account/ForgotPassword?')
        //browser.url('/Account/ForgotPassword?origin=https%3A%2F%2Fcx-sb01-auth01.azurewebsites.net%2FAccount%2FLogin%3FReturnUrl%3D%252Fconnect%252Fauthorize%252Fcallback%253Fclient_id%253Dggspa_cxsb01%2526scope%253Dopenid%252520intakeservice%2526response_type%253Did_token%252520token%2526response_mode%253Dform_post%2526redirect_uri%253Dhttps%25253A%25252F%25252Fcx-sb01-auth01.azurewebsites.net%25252FAccount%25252FClientRedirect%2526state%253Dhttp%25253A%25252F%25252Foxcdemo.alluma.org%2526nonce%253D15c1ae56-a21a-4490-a8d8-c56987380fb0&amp');
    }

    /*moderLogin() {
        this.openBase();
        $(loginSel.email).setValue(data.moderLogin); //moderator login
        $(loginSel.pass).setValue(data.moderPass); //moderator pass
        $(loginSel.btnLogin).click();
        $(headSel.logOutBtn).waitForDisplayed();
    }*/

    testLogin() {
        this.openBase();
        $(loginSel.email).setValue(data.testLogin); //test login
        $(loginSel.pass).setValue(data.testPass); //test pass
        $(loginSel.btnLogin).click();
        $(headSel.logOutBtn).waitForExist(3000);
    }

    anyUserLogin(login, pass) { //call this function with two arguments (login, Password)
        this.openBase()
        $(loginSel.email).setValue(login); //you need to enter your login existing email
        $(loginSel.pass).setValue(pass); //correct pass
        $(loginSel.btnLogin).click();
        $(headSel.logOutBtn).waitForDisplayed(3000);
    }
    /*
    allPlayersBtnClick() {
        $(headSel.allPlayerBtn).click();
        $(allPlayersSel.playersTableHeaders).waitForDisplayed();
    }

    logoutBtnСlick() {
        $(headSel.logOutBtn).click();
        $(loginSel.logo).waitForDisplayed();
    }

    newPlayertBtnRedirect() {
        $(headSel.newPlayerBtn).click();
        assert.equal(browser.getUrl(), exp.redirNewPlaer);
    }

    newGameBtnRedirect() {
        $(headSel.newGameBtn).click();
        assert.equal(browser.getUrl(), exp.redirNewGame);
    }

    continueBtnRedirect() {
        $(headSel.continueGameBtn).click();
        assert.equal(browser.getUrl(), exp.redirContinue);

    }*/

    randomString(max) { //you need to set value for string length
        let str = '';
        for (let i = 1; i <= max; i++) {
            str += String.fromCharCode(Math.random() * (126 - 35) + 35)
        }
        return str
    }
    /*
    validatePlaceholder(selector, expectedPlaceholder) {
        const actualPlaceholder = $(selector).getAttribute('placeholder');
        assert.equal(actualPlaceholder, expectedPlaceholder);
    }*/

    clearInputField(selector) {
        $(selector).setValue(['0', 'Backspace']);
    }
  /*
    editBtnClick() {
        $(myAccountSel.editBtn).click();
        $(myAccountSel.titlePass).waitForDisplayed();
    }*/

}
export default Base;
