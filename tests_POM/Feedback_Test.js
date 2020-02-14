import { t, Selector } from "testcafe";
import feedBackPage from '../Models/POMS/Feedback_Page';

const giveFeedBack = new feedBackPage();
const feedbackLink = Selector('#feedback');
const dataSet3 = require("../TestData/Feedback.json");
//======================================================================

fixture `Feedback`
    .page `http://zero.webappsecurity.com/`;
    
dataSet3.forEach(data =>{
test.only('User Adds a new feedback', async t => {
    //Actions
   await t
    .click(feedbackLink);
    await giveFeedBack.addNewFeedback(data.Name, data.Email,data.Subject, data.Question);
    /*
    .typeText(giveFeedBack.fbName,data.Name,{paste:true})
    .typeText(giveFeedBack.fbEmail,data.Email,{paste:true})
    .typeText(giveFeedBack.fbSubject,data.Subject,{paste:true})
    .typeText(giveFeedBack.fbQuestion,data.Question,{paste:true})
    .click(giveFeedBack.sendMessage)

    .expect(giveFeedBack.fbSCMessage.innerText).contains('Thank you')
    */
});
});
