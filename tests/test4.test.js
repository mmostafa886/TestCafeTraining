import { Selector } from "testcafe";

const dataSet = require("../TestData/data.json");

const nameInput = Selector("#developer-name");
const subBtn = Selector("#submit-button");
const successMessage = Selector("#article-header");

fixture`FirstAssignment`.page`https://devexpress.github.io/testcafe/example/`;
dataSet.forEach(data => {
  test(`Testing'${data.Name}'`, async t => {
    console.log(data.Name);
    //"setTestSpeed" is used for debugging purposes only
    //await t.setTestSpeed(0.7);

    await t
      .typeText(nameInput, data.Name)
      .takeElementScreenshot(nameInput)
      .click(subBtn)
      .takeScreenshot()
      .expect(successMessage.textContent).eql(data.SCM);
  });
});
