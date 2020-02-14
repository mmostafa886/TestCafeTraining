import { Selector } from "testcafe";

const nameInput = Selector("#developer-name");
const subBtn = Selector("#submit-button");
const successMessage = Selector("#article-header");

fixture`FirstAssignment`.page`https://devexpress.github.io/testcafe/example/`;
test("FirstAssignment", async t => {
  //"setTestSpeed" is used for debugging purposes only
  //await t.setTestSpeed(0.7);

  await t
    .typeText(nameInput, "Tamer")
    .takeElementScreenshot(subBtn)
    .click(subBtn)
    .takeScreenshot()
    .expect(successMessage.textContent).contains("Thansdasdsk you");
});
