import sel from '../selectors/footer.sel';
import exp from '../expected/footer.exp'
import {assert} from 'chai'
import Base from './base';

class Footer extends Base {
    footerContDisplayed(){
        this.openBase();
        let elem = $(sel.footerCont).waitForDisplayed();
        assert.equal(elem, true)
    }

    footerInfoDisplayed() {
        let elem = $(sel.footerInfo).isDisplayed();
        assert.equal(elem, true)
    }

    footerDisplayed (){
        let elem = $(sel.footerFooter).isDisplayed();
        assert.equal(elem, true)
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
        let elem = $(sel.footerLogo).isDisplayed();
        assert.equal(elem, true)

    }

    footerLogoWidth(){
        let elem =$(sel.footerLogo).getCSSProperty('width');
    assert.equal(elem.value,exp.footerLogoWidth) 
    }

    footerLogoSrc(){
        let elem =$(sel.footerLogo).getAttribute('src');
    assert.equal(elem.value,exp.footerLogoSrc) 
    }

   /* footerTextInfoGrpSize(){
        let elem = $(sel.footer).getCSSProperty('size');
        assert.equal(elem.value, exp.footerInfoGrpTextSize)
    }

    footerTextInfoGrpColor(){
        let elem = $(sel.footerInfoGrp).getCSSProperty('color');
        assert.equal(elem.value, exp.footerTextInfoGrpColor)
    }*/

    footerlogoAlignment(){
        let logoAlign=$(sel.footerLogo).getCSSProperty('vertical-align');
        assert.equal(logoAlign.value, exp.footerlogoAlign);
    }

    footerIconFasebookRedirect(){
        $(sel.iconFasebook).click();
        let orgPage = browser.getUrl();
        assert.equal(orgPage, exp.footerAllumaToFasebook);
        let elem = $(sel.logoAllumaFasebook).isDisplayed();
        assert.equal(elem,true)
        this.openBase()
    }

    footerIconTwitterRedirect(){
        $(sel.iconTwitter).click();
        let orgPage = browser.getUrl();
        assert.equal(orgPage, exp.footerAllumaToTwitter);
        this.openBase(); 
    }

    footerIconLinkedinRedirect(){
        $(sel.iconLinkedin).click();
        let orgPage = browser.getUrl();
        assert.equal(orgPage, exp.footerAllumaToLinkedin);
        this.openBase(); 
    }

    /*footerAboutDisplayed() {
        let elem = $(sel.footerAboutline1).isDisplayed();
        assert.equal(elem, true)
    }
    footerSiteLink1Is() {
        let elem = $(sel.footerAboutline1).isClickable();
        assert.equal(elem, true)
    }

    /*footerTextInfoGrpRedirect(){
        let elem = $('*=alluma.org').getText();
        assert.equal(elem, 'Alluma')
        
    }*/
}
export default new Footer();