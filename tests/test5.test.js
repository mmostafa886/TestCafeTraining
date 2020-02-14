import { Selector } from "testcafe";

//============================================================
const dataSet = require("../TestData/validData.json");
const dataSet2 = require("../TestData/Email.json");
const dataSet3 = require("../TestData/Feedback.json");
//============================================================
//Locators & Variables
const loginForm = Selector("#login_form");
const uLogin = Selector("#user_login");
const uPassword = Selector("#user_password");
const signInBtn = Selector("input[type=submit]");
const forgetPasswordLink = Selector("a").withText('Forgot your password ?');
const errorMessage = Selector("div[class='alert alert-error']");
const accntSummaryTab = Selector("#account_summary_tab");
const usernameMenu = Selector(".dropdown-toggle").withText("username");
const logoutLink = Selector("#logout_link");
const homeMenu = Selector("#homeMenu");
const userEmail = Selector("#user_email");
const forgotEmailPageHeader = Selector('.page-header');
const forgotEmailMessage = Selector('.span6');
const feedbackLink = Selector('#feedback');
const fbName = Selector('#name');
const fbEmail = Selector('#email');
const fbSubject = Selector('#subject');
const fbQuestion = Selector('#comment');
const sendMessage = Selector('input[name="submit"]');
const fbSCMessage = Selector('.offset3');
//============================================================

//Tests
fixture`Assignment001`.page`http://zero.webappsecurity.com/login.html`;
dataSet.forEach(data => {
  test.skip(`Testing with User/Password: ${data.Name}/${data.Password}`, async t => {

    //Debugging only, must be removed at the final vresion
    //await t.setTestSpeed(0.7);
    await t
      //.debug()

      .expect(loginForm.exists).ok()
      
      .typeText(uLogin, data.Name,{paste:true})
      .typeText(uPassword, data.Password,{paste:true});
      console.log('the provided Username & Password are: '+ data.Name+'/'+data.Password);
    await t
      .click(signInBtn)

      .expect(loginForm.exists).notOk()
      .expect(accntSummaryTab.exists).ok()

      .click(usernameMenu)
      .click(logoutLink)

      .expect(homeMenu.exists).ok()
      .expect(accntSummaryTab.exists).notOk();





  });
});

dataSet2.forEach(data =>{
test(`Test Forgot Password`, async t=>{
await t
  .click(forgetPasswordLink)
  .expect(userEmail.exists).ok()

  .typeText(userEmail,data.email,{paste:true})
  .pressKey('enter')

  .expect(forgotEmailPageHeader.exists).ok()
  .expect(forgotEmailMessage.innerText).contains(data.email);
  console.log('The provided Email is: '+data.email);


});

});


dataSet3.forEach(data =>{
  test(`Test Feedback`, async t=>{
    await t
    .navigateTo('http://zero.webappsecurity.com/')
    .click(feedbackLink)

    .typeText(fbName,data.Name,{paste:true})
    .typeText(fbEmail,data.Email,{paste:true})
    .typeText(fbSubject,data.Subject,{paste:true})
    .typeText(fbQuestion,data.Question,{paste:true})
    .click(sendMessage)

    .expect(fbSCMessage.innerText).contains('Thank you')

  })

})