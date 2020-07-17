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
    }

    openForgotFassword() {
        this.openBase();
        $$('a.gg-link:nth-child(2)')[0].click();
    }

    randomString(max) { 
        let str = '';
        for (let i = 1; i <= max; i++) {
            str += String.fromCharCode(Math.random() * (126 - 35) + 35)
        }
        return str
    }

    clearInputField(selector) {
        $(selector).setValue(['0', 'Backspace']);
    }
}
export default Base;
