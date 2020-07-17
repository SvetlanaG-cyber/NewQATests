import forgotPassword from '../pages/forgot-password.page';


describe('ForgotPassword', function () {

    it('Forgot-password-page-text-displayed', function () {
        forgotPassword.forgotPasswordPageDisplayed();
    });

    it('ForgotPassword-text1-displayed', function () {
        forgotPassword.forgotPasswordTitle1TextDisplayed();
    });

    it('ForgotPassword-text2-displayed', function () {
        forgotPassword.forgotPasswordTitle2TextDisplayed();  
    });

    it('ForgotPassword-page-has-2-bottons', function () {
        forgotPassword.forgotPasswordPage2botton();  
    });

    it('ForgotPassword-page-has-botton-cancel', function () {
        forgotPassword.forgotPasswordPageCancel  
    });

    it('ForgotPassword-page-has-botton-continue', function () {
        forgotPassword.forgotPasswordPageContinue();  
    });

    it('ForgotPassword-page-has-input-box', function () {
        forgotPassword.emailInputBoxIsDisplayd();   
    });

    it('Input-box-has-icon', function () {
        forgotPassword.iconInputBoxIsDisplayd();   
    });

    it('Input-box-has-label', function () {
        forgotPassword.labelInputBox();   
    });

    it('ForgotPassword-page-has-link', function () {
        forgotPassword.linkIForgotMyUsername();   
    });

    it('Bottom-cancel-redirect-login-page', function () {
        forgotPassword.bottonCancelRedirect();   
    });

    it('Link-I-forgot-redirect-to-forgot-username-page', function () {
        forgotPassword.linkIForgotUsernameRedirect();   
    });

    it('Botton-cancel-bg-color', function () {
        forgotPassword.cancelBottonBGColor();   
    });

    it('Botton-continue-bg-color', function () {
        forgotPassword.continueBottonBgColor();   
    });

    it('Botton-continue-Text', function () {
        forgotPassword.continueBottonText();  
    });

    it('Botton-cancel-Text', function () {
        forgotPassword.cancelBottonText();   
    });

   
    it('Botton-cancel-redirect', function () {
        forgotPassword.bottonCancelRedirect();   
    });

    it('Botton-continue-redirect', function () {
        forgotPassword.bottonContinueRedirect();   
    });

    it('Input-box-assepts-username-@', function () {
        forgotPassword.inputBoxAsseptsUsername();   
    });   

})