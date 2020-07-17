import footer from '../pages/footer.page';

describe('Footer', function () {
    it('Footer-Cont-displayed', function () {
        footer.footerContDisplayed();
    });

    it('Footer-info-displayed', function () {
        footer.footerInfoDisplayed();
    });

    it('Footer-cc-displayed', function () {
      footer.footerDisplayed();
    });

    it('Footer-background-color', function () {
        footer.footerBackgroundColor();   
    });

    it('Footer-background-font-size', function () {
        footer.footerDisplayed();   
    });

    it('Footer-logo-displayed', function () {
        footer.footerLogoDisplayed();   
    });

    it('Footer-logo-width', function () {
        footer.footerLogoWidth();   
    });

    it('Footer-logo-alignment', function () {
        footer.footerlogoAlignment();   
    });

    it('Footer-icon-linkedin-redirect', function () {
        footer.footerIconLinkedinRedirect();   
    });

    it('Footer-icon-fasebook-redirect', function () {
        footer.footerIconFasebookRedirect();   
    });

    it('Footer-icon-twitter-redirect', function () {
        footer.footerIconTwitterRedirect();   
    });

    it('Footer-about-displayed', function () {
        footer.footerAboutDisplayed();   
    });

    it('Footer-site-link1', function () {
        footer.footerSiteLink1Is();   
    });

});