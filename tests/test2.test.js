import { Selector } from "testcafe";

const nameInput = Selector("#developer-name");
const subBtn = Selector("#submit-button");
const successMessage = Selector("#article-header");

fixture`FirstAssignment`.page`https://devexpress.github.io/testcafe/example/`;
test("FirstAssignment", async t => {
  await t
    .typeText(nameInput, "Tamer")
    .click(subBtn)
    //.expect(successMessage.value).eql('Thank you, Tamer!');
    //.expect(successMessage.innerText).eql('Thank you, Tamer!');
    // .expect(successMessage.textContent).eql('Thank you, Tamer!');
    // .expect(successMessage.innerText).contains('Thank you');
    .expect(successMessage.textContent)
    .contains("Thank you");
});
