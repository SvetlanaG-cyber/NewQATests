import sel from '../selectors/browser.sel'
import exp from '../expected/browser.exp'
import {assert} from 'chai'
class Browse {
    
    title(){
     browser.url('/');
    browser.pause(10000);
    let res=browser.getTitle()
     assert.equal(res,exp.title)
    }
    headerDisplayed(){
        $(sel.header).isDisplayed();
    }
    appPageConteinerDisplayed(){
        $(sel.appPageConteiner).isDisplayed();
    }
    footerDisplayed(){
        $(sel.footer).isDisplayed();
    }
}
export default new Browse();