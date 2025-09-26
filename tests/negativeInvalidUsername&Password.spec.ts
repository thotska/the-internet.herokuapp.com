import {test} from '@playwright/test'
import { Homepage} from '../pages/Homepage'
import { FormAuthenticationPage } from '../pages/formAuthentication'

let homepage: Homepage
let formAuthenticationPage: FormAuthenticationPage


test.beforeEach(async ({page}) => {
     homepage = new Homepage(page)
     formAuthenticationPage = new FormAuthenticationPage(page)
    await page.goto('https://the-internet.herokuapp.com/')
    await  homepage.clickOnFormAuthenticationLink()
    await  formAuthenticationPage.clickLogInButton()
}
)  

test('Negative test: Validation of invalid username message', async ({page}) => {
   
   await  formAuthenticationPage.fillUsernameField('invalid_username')
   await  formAuthenticationPage.fillPasswordField('SuperSecretPassword!')
   await  formAuthenticationPage.invalidUsernameMessageVerification()
})

test('Negative test: Validation of invalid password message', async ({page}) => {
    let homepage = new Homepage(page)
    let formAuthenticationPage = new FormAuthenticationPage(page)
   await  formAuthenticationPage.fillUsernameField('tomsmith')
   await  formAuthenticationPage.fillPasswordField('invalid_password')
   await  formAuthenticationPage.invalidPasswordMessageVerification()
})