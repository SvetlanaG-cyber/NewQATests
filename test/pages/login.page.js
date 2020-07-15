import sel from '../selectors/login-page.sel';
import exp from '../expected/login.exp';
import data from '../data/tester.data';
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

    loginLincTryOurQuickScreenerRedirect(){
        $$(sel.loginLinkText)[0].click();
        let newPage = browser.getUrl();
        assert.equal(newPage, exp.loginLincTryRedirect);
        this.openBase()
    }

    loginFormTitle2TextDisplayed() {
        let elem = $$(sel.loginFormTitle2)[0].isDisplayed();
        assert.equal(elem, true);
    }

    loginFormTitle3TextDisplayed() {
        let elem = $$(sel.loginFormTitle3)[0].isDisplayed();
        assert.equal(elem, true);
    }

    loginFormTitle4TextDisplayed() {
        let elem = $$(sel.loginFormTitle4)[0].isDisplayed();
        assert.equal(elem, true);
    }

    loginFormTitle2TextColor() {
        let elem = $$(sel.loginFormTitle2)[0].getCSSProperty('color').parsed;
        assert.equal(elem.parsed, exp.loginFormTitle2Color);
    }

    loginFormTitle2TextFontSize() {
        let elem = $$(sel.loginFormTitle2)[0].getValue('font-size');
        assert.equal(elem.value, exp.loginFormTitle2FontSize);
    }

    loginFormTitle2TextAttribute() {
        let elem = $$(sel.loginFormTitle2)[0].getText();
        assert.equal(elem.value, exp.loginFormTitle2TextAttribute);
    }

    loginFormTitle2TextFontWeight() {
        let elem =$$(sel.loginFormTitle2)[0].getValue('font-weight');
        assert.equal(elem, exp.loginFormTitle2TextFontWeight);
    }

    loginFormTitle2TextLineHeight() {
        let elem = $$(sel.loginFormTitle2)[0].getCSSProperty('line-height').parsed.string;
        assert.equal(elem.value, exp.loginFormTitle1TextLineHeight);
    }

    loginFormTitle2TextMarginTop() {
        let elem = $$(sel.loginFormTitle2)[0].getCSSProperty('margin-top').parsed.string;
        assert.equal(elem.value, exp.loginFormTitle2TextMarginTop);
    }

    loginFormTitle2TextMarginBottom() {
        let elem = $$(sel.loginFormTitle2)[0].getCSSProperty('margin-bottom').parsed.string;
        assert.equal(elem.value, exp.loginFormTitle2TextMarginBottom);
    }

    loginFormUsernameInputBox() {
        let userInput = $(sel.usernameInputBox).isExisting();
        assert.equal(userInput, true);
    }

    loginFormPasswordInputBox() {
        let passwordInput = $(sel.passwordInputBox).isDisplayed();
        assert.isTrue(passwordInput);
    }
    
    loginEmptyUsernameInputBox() {
        $(sel.passwordInputBox).addValue(data.testPassword);
        $$(sel.loginBtnLogin)[0].click();
        let elem = $$(sel.loginErrorMessageUsername)[0].waitForDisplayed();
        assert.equal(elem,true);
        this.openBase();
    }

    loginEmptyPasswordInputBox() {
         $(sel.usernameInputBox).addValue(data.testUsername);
         $$(sel.loginBtnLogin)[0].click();
         let elem = $$(sel.loginErrorMessageUsername)[0].waitForDisplayed();
         assert.equal(elem,true);
         this.openBase();
     }

    errorMassageText() {
        $(sel.usernameInputBox).addValue(data.testUsername);
        $$(sel.loginBtnLogin)[0].click();
        $$(sel.loginErrorMessageUsername)[0].waitForDisplayed();
        let elem = $$(sel.loginErrorMessageUsername)[0].getText();
        assert.equal(elem,exp.errorEmptyPasswordMessageText);
        this.openBase();
    }

     errorPasswordMassageText() {
        $(sel.passwordInputBox).addValue(data.testPassword);
        $$(sel.loginBtnLogin)[0].click();
        let elem = $$(sel.loginErrorMessageUsername)[0].waitForDisplayed();
        let error  = $$(sel.loginErrorMessageUsername)[0].getText();
        assert.equal(error, exp.errorEmptyUsernameMessageText);
        this.openBase();
    }
    
     loginNotRegisterUser() {
        $(sel.usernameInputBox).addValue(data.testUsername);
        $(sel.passwordInputBox).addValue(data.testPassword);
        $$(sel.loginBtnLogin)[0].click();
        let elem = $$(sel.loginErrorInputUsername)[0].waitForDisplayed();
        assert.equal(elem,true);
        this.openBase();
    }

    login100UsernameInputBox() {
        let elem = $(sel.usernameInputBox).setValue(this.randomString(100)); 
        assert.equal( $(sel.usernameInputBox).getValue().length, 100);
       
    }

    login101UsernameInputBox() {
        let elem = $(sel.usernameInputBox).setValue(this.randomString(101));
        assert.equal( $(sel.usernameInputBox).getValue().length, 100);
       
    }

    login100PasswopdInputBox() {
        let elem = $(sel.passwordInputBox).setValue(this.randomString(100)); 
        assert.equal( $(sel.passwordInputBox).getValue().length, 100);
       
    }

    login101PasswordInputBox() {
        let elem = $(sel.passwordInputBox).setValue(this.randomString(101));
        assert.equal( $(sel.passwordInputBox).getValue().length, 100);
       
    }

    usernameLinkRedirect() {
        $$(sel.usernameLink)[0].click();
        let elem = $$(sel.titleText)[0].getText();
        assert.equal(elem, exp.forgotUsernamePage);
        this.openBase();

    }

    passwordLinkRedirect() {
        $$(sel.passwordLink)[0].click();
        let elem = $$(sel.titleText)[0].getText();
        assert.equal(elem,  exp.forgotPasswordPage);
        this.openBase();

    }

    usernameImgIsDisplayed() {
        $$(sel.Img)[1].isDisplayed();

    }

    passwordImgIsDisplayed() {
        $$(sel.Img)[2].isDisplayed();

    }

    errorIconIsDisplayed() {
        $$(sel.loginBtnLogin)[0].click();
        $$(sel.Img)[0].isDisplayed();
    }

    //$$(sel.loginBtnLogin)[0].isDisplayed();

}

export default new Login();