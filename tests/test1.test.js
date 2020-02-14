import { Selector } from "testcafe";
fixture`Getting Started`.page`http://devexpress.github.io/testcafe/example`;
test("My first test", async t => {
  // Test code
  //"wait" is used for debbugging only
  // await t.wait(10000);
});
