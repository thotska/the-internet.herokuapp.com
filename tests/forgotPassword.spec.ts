import {test} from "@playwright/test"
import { Homepage } from "../Page/Homepage"
import { ForgotPassword } from "../Page/forgotPassword"
import { ErrorMessagePage } from "../Page/errorMessagePage"
// //user foes to https://the-internet.herokuapp.com/
// user clicks on "forgot password"
// user types in valid email
//   user clicks retrieve password
// user is seeing a message error "Internal Server Error"

test("Error message validation", async ({page}) =>{
    let homepage = new Homepage(page)
    let forgotPassword = new ForgotPassword(page)
    let errorMessagePage = new ErrorMessagePage(page)

    await page.goto('https://the-internet.herokuapp.com/')
    await homepage.clickForgotPasswordLink()
    await forgotPassword.typingInEmailField('thoska@gmail.com')
    await forgotPassword.clickOnRetrievePassword()
    await errorMessagePage.validateErrorMessage()
})