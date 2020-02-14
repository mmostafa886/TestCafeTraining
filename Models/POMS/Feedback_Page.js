import { t, Selector } from "testcafe";

class feedBackPage {
    constructor() {

        this.fbName = Selector('#name');
        this.fbEmail = Selector('#email');
        this.fbSubject = Selector('#subject');
        this.fbQuestion = Selector('#comment');
        this.sendMessage = Selector('input[name="submit"]');
        this.fbSCMessage = Selector('.offset3');
    }

    async addNewFeedback(name,email,subject,question){
        await t
      //  .debug()
       // .setTestSpeed(0.5)
        .typeText(this.fbName,name,{paste:true})
        .typeText(this.fbEmail,email,{paste:true})
        .typeText(this.fbSubject,subject,{paste:true})
        .typeText(this.fbQuestion,question,{paste:true})
        .click(this.sendMessage)
    
        .expect(this.fbSCMessage.innerText).contains('Thank you')
    }

}

export default feedBackPage;