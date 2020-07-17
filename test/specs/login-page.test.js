import login from '../pages/login.page';


describe('Login', function () {

    it('Home-page-displayed', function () {
        login.loginPageDisplayed();
    });

    it('Home-bg-image', function () {
        login.loginPageBgImage();
    });

    it('Home-bg-height', function () {
        login.loginPageBgHeight();
    });

    it('Home-bg-width', function () {
        login.loginPageBgWidth();
    });

    it('Home-bg-position', function () {
        login.loginPageBgPosition();
    });

    it('Home-bg-size-adjust', function () {
        login.loginPageBgTextSize();
    });

    it('Login-form-size-adjust', function () {
        login.loginFormTextSize();
    });

    it('Login-form-width', function () {
        login.loginFormBgWidth();
    });

    it('Login-form-bg-color', function () {
        login.loginFormBgColor();
    });

    it('Login-form-padding-bottom', function () {
        login.loginFormPaddingBottom();
    });

    it('Login-form-padding-left', function () {
        login.loginFormPaddingLeft();
    });

    it('Login-form-padding-right', function () {
        login.loginFormPaddingRight();
    });

    it('Login-form-padding-top', function () {
        login.loginFormPaddingTop();
    });

    it('Login-try-our-quick-screener-redirect', function () {
        login.loginLincTryOurQuickScreenerRedirect();
    });

    it('Login-form-title2-displayed', function () {
        login.loginFormTitle2TextDisplayed();
    });
     
    it('Login-form-title3-displayed', function () {
        login.loginFormTitle3TextDisplayed();
    });

    it('Login-form-title4-displayed', function () {
        login.loginFormTitle4TextDisplayed();
    });

    it('Login-form-title2-margin-top', function () {
        login.loginFormTitle2TextMarginTop();
    });
    
    it('Login-form-title2-margin-bottom', function () {
        login.loginFormTitle2TextMarginBottom();
    });

    it('Login-form-title2-line-height', function () {
        login.loginFormTitle2TextLineHeight();
    });

    it('Login-form-title2-font-weight', function () {
        login.loginFormTitle2TextFontWeight();
    });

    it('Login-form-title2-attribute', function () {
        login.loginFormTitle2TextAttribute();
    });

    it('Login-form-has-username-box', function () {
        login.loginFormUsernameInputBox();
    });

    it('Login-form-has-password-box', function () {
        login.loginFormPasswordInputBox();
    });

    it('Rondom-string-100-username', function () {
        login.login100UsernameInputBox();
    });

    it('Rondom-string-101-username', function () {
        login.login101UsernameInputBox();
    });

    it('Rondom-string-100-password', function () {
        login.login100PasswopdInputBox();
    });

    it('Rondom-string-101-password', function () {
        login.login101PasswordInputBox();
    });

    it('Username-link-redirect', function () {
        login.usernameLinkRedirect();
    });

    it('Password-link-redirect', function () {
        login.passwordLinkRedirect();
    });

    it('Username-img-is-Displayed', function () {
        login.usernameImgIsDisplayed();
    });

    it('Password-img-is-Displayed', function () {
        login.passwordImgIsDisplayed();
    });

    it('Error-img-is-Displayed', function () {
        login.errorIconIsDisplayed();
    });

    it('Login-form-has-error-username-message', function () {
        login.loginEmptyUsernameInputBox();    
    });

    it('Login-form-has-error-password-message', function () {
        login.loginEmptyPasswordInputBox();   
    });

    it('User-is-not-register-message', function () {
        login.loginNotRegisterUser();   
    });

    it('Error-message-text-is', function () {
        login.errorMassageText();   
    });

    it('Botton-login-is', function () {
        login.btnLoginIsDisplayed();    
    });

    it('Error-password-message-text-is', function () {
        login.errorPasswordMassageText();   
    });   
});