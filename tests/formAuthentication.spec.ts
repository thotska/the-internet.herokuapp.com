import{test} from "@playwright/test"
import { Homepage} from "../pages/Homepage"
import { FormAuthenticationPage } from "../pages/formAuthentication"
import { LoggedInSecured } from "../pages/loggedInSecure"

test("Positive test: Validation of login and logout message", async ({page}) => {
    let homepage = new Homepage(page)
    let formAuthenticationPage = new FormAuthenticationPage(page)
    let loggedInSecured = new LoggedInSecured(page)

 await  page.goto('https://the-internet.herokuapp.com/')
 await  homepage.clickOnFormAuthenticationLink()
 await  formAuthenticationPage.fillUsernameField('tomsmith')
 await  formAuthenticationPage.fillPasswordField('SuperSecretPassword!')
 await  formAuthenticationPage.clickLogInButton()
 await  loggedInSecured.successMessageVerification()
 await  loggedInSecured.clickLogOutbutton()
 await  formAuthenticationPage.logOutMessageVerification()
})