import { expect, Locator, Page } from "@playwright/test"

export class FormAuthenticationPage{

  private userNameFieldLocator: Locator
  private passwordFieldLocator: Locator
  private loginButtonLocator: Locator
  private logOutMessageLocator: Locator
  

    constructor(page: Page){

        this.userNameFieldLocator = page.getByRole('textbox', { name: 'Username' })
        this.passwordFieldLocator = page.getByRole('textbox', { name: 'Password' })
        this.loginButtonLocator = page.getByRole('button', { name: ' Login' })
        this.logOutMessageLocator = page.getByText('You logged out of the secure')
    }

    async fillUsernameField(username:string):Promise<void>{
        await this.userNameFieldLocator.fill(username)
    }
    async fillPasswordField(password:string):Promise<void>{
        await this.passwordFieldLocator.fill(password)
    }
    async clickLogInButton():Promise<void>{
        await this.loginButtonLocator.click()
    }
   async logOutMessageVerification():Promise<void>{
    await expect(this.logOutMessageLocator).toContainText('You logged out of the secure area!')
   }
}