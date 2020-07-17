import browser from '../pages/browser.page';

describe('Browser', function () {

  it('Main-title', function () {
    browser.title();
  });

  it('Header-is-displayed', function () {
    browser.headerDisplayed();
  });

  it('AppPages-container-is-displyed', function () {
    browser.appPageConteinerDisplayed();
  });

  it('Footer-is-displayed', function () {
    browser.footerDisplayed();
  });

});