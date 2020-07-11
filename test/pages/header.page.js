import sel from '../selectors/header.sel';
import exp from '../expected/header.exp';
import { assert } from 'chai';
import Base from './base';

class Header extends Base {

    headerLocation() {
        this.openBase();
        let headerLoc = $(sel.header).getLocation('y');
        assert.equal(headerLoc, exp.headerLocation);
    }

    titleExistHeader() {
        let elem = $(sel.headerTitle).isExisting();
        assert.isTrue(elem);
    }


    headerTitleText() {
        let textHTML = $(sel.headerTitle).getText();
        assert.equal(textHTML, exp.headerTitleText);
    }

    titleAlign() {
        let headerTitleleft = $(sel.header).getSize('width') / 3;
        let elem = $(sel.headerTitle).getLocation('x');
        let titleAlign = (headerTitleleft > elem);
        assert.isTrue(titleAlign)
    }

    languagesExistHeader() {
        let elem = $(sel.headerLanguage).isExisting();
        assert.isTrue(elem);
    }

    headerEnglishText() {
         /*var password = document.querySelector('input[type="password"]:valid').value;
  document.querySelector('progress').value = '0';*/
        let textHTML =document.querySelector($(sel.headerLanguage)).value;
        console.log(textHTML)
        assert.equal(textHTML,exp.headerLanguageEn);
    }

    /*headerSpanishText() {
        let textHTML = $(sel.headerLanguageSpanish);
        console.log(textHTML)
        assert.isVisible(textHTML);
    }*/

    headerLanguagesAlign() {
        let headerLanguagesRight = $(sel.header).getSize('width') / 3 * 2;
        let elem = $(sel.headerLanguageEnglish).getLocation('x');
        let languegesAlign = (headerLanguagesRight > elem);
        assert.isTrue(languegesAlign)
    }

    headerEnglishAlign() {
        let elemEn = $(sel.headerLanguageEnglish).getLocation('x');
        let elemSp = $(sel.headerLanguageSpanish).getLocation('x');
        let englishAlign = (elemSp < elemEn);
        assert.isFalse(englishAlign)
    }

    titleTextColor(){
        const textColor = $(sel.headerTitle).getCSSProperty('color');
        assert.equal(textColor.value, exp.headerTitleColor);
    }

    titleTextSize(){
        const fontSize = $(sel.headerTitle).getCSSProperty('font-size');
        assert.equal(fontSize.value, exp.headerTitleSize);
    }

    headerBgColor(){
        const BgColor = $(sel.header).getCSSProperty('background-color');
        assert.equal(BgColor.value, exp.headerBgColor);
    
    }
    /*headerHasOneBtn() {
        let length = $(sel.header).$$(sel.allBtnTag).length
        assert.equal(length, exp.numberOfBtn);
    }

    loginBtnText() {
        let textHTML = $(sel.loginBtn).getText();
        assert.equal(textHTML, exp.loginBtnText);
    }

    loginClickRedirect() {
        $(sel.loginBtn).click();
        assert.equal(browser.getUrl(), exp.baseUrl);
    }*/

}
