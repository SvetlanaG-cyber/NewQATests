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
        assert.isTrue(titleAlign);
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
}
export default new Header();