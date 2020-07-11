import sel from '../selectors/footer.sel';
import exp from '../expected/footer.exp'
import {assert} from 'chai'
import Base from './base';

class Footer extends Base {
    footerContDisplayed(){
        this.openBase();
        $(sel.footerCont).waitForDisplayed();
    }

    footerInfoDisplayed() {
        $(sel.footerInfo).isDisplayed();
    }

    footerDisplayed (){
        $(sel.footerFooter).isDisplayed();
    }

    footerBackgroundColor(){
        let footerBackgroundColor = $(sel.footerFooter).getCSSProperty('background-color')
        assert.equal(footerBackgroundColor.value, exp.footerBgColor)
    }

    footerFontSize(){
        let footerFontSize=$(sel.footerFooter).getCSSProperty('font-size');
    assert.equal(footerFontSize.value,exp.footerFontSize) 
    }

    footerLogoDisplayed() {
        $(sel.footerLogo).isDisplayed();
    }

    footerLogoWidth(){
        let elem =$(sel.footerLogo).getCSSProperty('width');
    assert.equal(elem.value,exp.footerLogoWidth) 
    }

    footerLogoSrc(){
        let elem =$(sel.footerLogo).getAttribute('src');
    assert.equal(elem.value,exp.footerLogoSrc) 
    }

    footerTextInfoGrpSize(){
        let elem = $(sel.footer).getCSSProperty('size');
        assert.equal(elem.value, exp.footerInfoGrpTextSize)
    }

    footerTextInfoGrpColor(){
        let elem = $(sel.footerInfoGrp).getCSSProperty('color');
        assert.equal(elem.value, exp.footerTextInfoGrpColor)
    }

    footerlogoAlignment(){
        let logoAlign=$(sel.footerLogo).getCSSProperty('vertical-align');
        assert.equal(logoAlign.value, exp.footerlogoAlign);
    }
    
    footerTextInfoGrpRedirect(){
        let elem = '.gg-footer-cc.gg-footer-info-grp a href'.link();//'.gg-footer-cc-text span a href=Alluma'.link();//'.gg-footer-cc.gg-footer-info-grp a href'
        $(sel.logo).waitForDisplayed();
    }

    footerIconFasebookRedirect(){
        $(sel.iconFasebook).click();
        let elem = $(sel.logoAllumaFasebook).isDisplayed();
        assert.equal(elem,true)
        this.openBase()
    }
}
export default new Footer();