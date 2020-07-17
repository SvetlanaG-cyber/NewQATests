import forgotUsername from '../pages/forgot-username.page';


describe('ForgotUsername', function () {

    it('ForgotUsername-page-displayed', function () {
        forgotUsername.forgotUsernamePageDisplayed();
    });

    it('ForgotUsername-text1-displayed', function () {
        forgotUsername.forgotUsernameTitle1TextDisplayed();
    });

    it('ForgotUsername-text2-displayed', function () {
        forgotUsername.forgotUsernameTitle2TextDisplayed();   
    });

    it('ForgotUsername-page-has-2-bottons', function () {
        forgotUsername.forgotUsernamePage2botton();   
    });

    it('ForgotUsername-page-has-botton-back', function () {
        forgotUsername.forgotUsernamePageBack();    
    });

    it('ForgotUsername-page-has-botton-recover', function () {
        forgotUsername.forgotUsernamePageRecover();    
    });

    it('ForgotUsername-page-has-input-box', function () {
        forgotUsername.emailInputBoxIsDisplayd();   
    });

    it('Input-box-has-label', function () {
        forgotUsername.labelInputBox();    
    });

    it('ForgotUsername-page-has-link', function () {
        forgotUsername.linkIForgotMyPassword();    
    });

    it('Bottom-back-redirect-login-page', function () {
        forgotUsername.bottonBackRedirect();   
    });

    it('Link-I-forgot-redirect-forgot-page', function () {
        forgotUsername.linkIForgotMyPassword();    
    });

    it('Message-text', function () {
        forgotUsername.bottonRecoverError();    
    });

    it('Error-email-message-text-color', function () {
        forgotUsername.bottonRecoverErrorTextColor();   
    });

    it('Botton-back-color', function () {
        forgotUsername.backBottonColor();   
    });

    it('Botton-recover-color', function () {
        forgotUsername.recoverBottonColor();    
    });
});