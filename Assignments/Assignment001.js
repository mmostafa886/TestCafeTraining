import { Selector } from "testcafe";

//A function to convert the retrieved Hex color into RGB
//It takes the Hex value of the color(without the #) & returns back its RGB value
function hexToRgb(hex) {
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
//============================================================
const dataSet = require("../TestData/Assignment_Data.json");

//============================================================
//Locators & variables
const uLogin = Selector("#user_login");
const uPassword = Selector("#user_password");
//const signInBtn = Selector(".btn btn-primary"); //didn't work with me
const signInBtn = Selector("input[type=submit]");
//const errorMessage = Selector(".alert alert-error");//didn't work with me
const errorMessage = Selector("div[class='alert alert-error']");
const errColor = "b94a48";
//============================================================

//Tests
fixture`Assignment001`.page`http://zero.webappsecurity.com/`;
dataSet.forEach(data => {
  test(`Testing with User/Password: ${data.Name}/${data.Password}`, async t => {

    //Debugging only, must be removed at the final vresion
    //await t.setTestSpeed(0.7);
    await t
      //Step#1: Navigate to the Sign In page
      .navigateTo("http://zero.webappsecurity.com/login.html")

      //Step#2: Assert the existence fo the username & Password fields and signIn button
      .expect(uLogin.exists).ok()
      //.expect(uLogin.count).gte(1) //this performs the same function as "exists"
      .expect(uPassword.exists).ok()
      .expect(signInBtn.exists).ok()

      //Step#3: Provide login credentials & click on the SignIn button
      .typeText(uLogin, data.Name)
      .typeText(uPassword, data.Password)
      .click(signInBtn)

      //Step#4: Assert the error message (Presence & color) for wrong login
      .expect(errorMessage.exists).ok()
      .expect(errorMessage.getStyleProperty('color')).eql(hexToRgb(errColor))



  });
});
