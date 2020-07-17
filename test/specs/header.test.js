import header from '../pages/header.page';

describe('Header', function () {

  it('Header-displayed', function () {
    header.headerLocation();
  });

  it('Title-exsist-header', function () {
    header.titleExistHeader();
  });

  it('Header-title-text', function () {
    header.headerTitleText();
  });

  it('Title-alignment', function () {
    header.titleAlign();
  });

  it('Title-text-color', function () {
    header.titleTextColor();
  });

  it('Title-text-size', function () {
    header.titleTextSize();
  });

  it('Header-beckground-color', function () {
    header.headerBgColor();
  });
});