import {assert} from 'chai';
import exp from '../expected/browser.exp';
import browse from '../pages/browser.page';

describe('Browse', function () { //define suite title by passing a string

    it('Tab title', function () { //define test title by passing a string
     //browser.url('/');
     browse.title();
     //let title=browser.getTitle();
     //assert.equal(browser.getTitle(),'Intellectual Games Club')
    });
    it('Header is displayed', function () { //define test title by passing a string
     //$('#header').isDisplayed()
     browse.headerDisplayed();
    });
    it('App/Pages container is displyed', function () { //define test title by passing a string
     // $('.site-content').isDisplayed()
     browse.appPageConteinerDisplayed();
    });
    it('Footer is displayed', function () { //define test title by passing a string
    // $('#footer').isDisplayed()
    
      browse.footerDisplayed();
    })
});