import footer from '../pages/footer.page';

describe('Footer', function () {
    it('Footer-Cont-displayed', function () {
        footer.footerContDisplayed();
    })

    it('Footer-info-displayed', function () {
        footer.footerInfoDisplayed();
    })

    it('Footer-cc-displayed', function () {
      footer.footerDisplayed();
    })

    it('Footer-background-color', function () {
        footer.footerBackgroundColor();   
    })

    it('Footer-background-font-size', function () {
        footer.footerDisplayed();   
    })

    it('Footer-logo-displayed', function () {
        footer.footerLogoDisplayed();   
    })

    it('Footer-logo-width', function () {
        footer.footerLogoWidth();   
    })

    it('Footer-logo-alignment', function () {
        footer.footerlogoAlignment();   
    })

    /*it('Footer-logo-src', function () {
        footer.footerLogoSrc();   
    })

    it('Footer-text-info-grp-color', function () {
        footer.footerTextInfoGrpColor();   
    })

    it('Footer-text-info-grp-size', function () {
        footer.footerTextInfoGrpSize();   
    })

    it('Footer-text-info-grp-redirect', function () {
        footer.footerTextInfoGrpRedirect();   
    })*/

    it('Footer-icon-fasebook-redirect', function () {
        footer.footerIconFasebookRedirect();   
    })
});