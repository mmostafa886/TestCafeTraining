/* import { Selector } from 'testcafe'
 fixture`Payment Test`
     .page`http://zero.webappsecurity.com/`
     .beforeEach(async t => {  //will run before each test
         const signin_button = Selector("#signin_button")
         await t.click(signin_button);
         const login_user_input = Selector("#user_login")
         const login_pass_input = Selector("#user_password")
         await t.typeText(login_user_input, "username", { paste: true })
         await t.typeText(login_pass_input, "password", { paste: true })
         const submit_button = Selector("input[name=submit]")
         await t.click(submit_button)
     });*/



/*import { Selector } from 'testcafe'
import { login } from '../helper';
fixture`Payment Test`
    .page`http://zero.webappsecurity.com/`
    .beforeEach(login);
*/

import { Selector } from 'testcafe'
import * as helperFunctions from '../helper';
fixture`Payment Test`
    .page`${process.env.main_url}`
    .beforeEach(helperFunctions.loginWithEnv);

    
test.only('user can add new payment', async t => {
    //Selectors
    const pay_bill_tab = Selector("#pay_bills_tab")
    const add_new_paye_tab = Selector('a').withText('Add New Payee')
    const form_name = Selector("#np_new_payee_name")
    const form_address = Selector("#np_new_payee_address")
    const form_account = Selector("#np_new_payee_account")
    const form_details = Selector("#np_new_payee_details")
    const form_submit_button = Selector("#add_new_payee")
    const message = Selector("#alert_content").innerText
    //Actions
    await t.click(pay_bill_tab);
    await t.click(add_new_paye_tab);
    await t.typeText(form_name, "Tamer", { paste: true })
    await t.typeText(form_address, "giza", { paste: true })
    await t.typeText(form_account, "1234", { paste: true })
    await t.typeText(form_details, "all details you want", { paste: true })
    await t.click(form_submit_button)
    //Assertion
    await t.expect(message).contains("successfully created")
});
