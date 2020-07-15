import sel from '../selectors/forgot-password.sel';
import exp from '../expected/forgot-password.exp';
import {assert} from 'chai';
import Base from './base';

class ForgotPassword extends Base {

    forgotPasswordPageIs(){
        this.openForgot();
       /* let el = browser.getUrl();
        assert.equal(el,exp.forgotPasswordPageIs)*/
        let elem = $(sel.loginForm).isExisting();
        assert.equal(elem, true)
        
    }
      
     linkIForgotRedirect(){
         
         let elem = $(sel.textForgotPassword).getText();
         //let elem = browser.getUrl();
         assert.equal(elem, exp.textForgotPassword)
         
     }
    
}

export default new ForgotPassword();
