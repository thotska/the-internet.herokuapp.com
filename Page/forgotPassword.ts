import { Locator, Page } from "@playwright/test"
// //user foes to https://the-internet.herokuapp.com/
// user clicks on "forgot password"
// user types in valid email
//   user clicks retrieve password
// user is seeing a message error "Internal Server Error"

export class ForgotPassword{

    emailFieldLocator: Locator
    retrievePasswordButtonLocator: Locator

    constructor(page: Page){
        this.emailFieldLocator = page.getByRole('textbox', { name: 'E-mail' })
        this.retrievePasswordButtonLocator = page.getByRole('button', { name: 'Retrieve password' })
    }
    
    async typingInEmailField(validEmail: string):Promise<void>{
        await this.emailFieldLocator.fill(validEmail)
    }

    async clickOnRetrievePassword():Promise<void>{
        await this.retrievePasswordButtonLocator.click()
    }
}