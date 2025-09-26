import { expect, Locator, Page } from "@playwright/test"

export class FormAuthenticationPage{

  private userNameFieldLocator: Locator
  private passwordFieldLocator: Locator
  private loginButtonLocator: Locator
  private logOutMessageLocator: Locator
  private invalidUsernameMessageLocator: Locator
  private invalidPasswordMessageLocator: Locator

    constructor(page: Page){

        this.userNameFieldLocator = page.getByRole('textbox', { name: 'Username' })
        this.passwordFieldLocator = page.getByRole('textbox', { name: 'Password' })
        this.loginButtonLocator = page.getByRole('button', { name: ' Login' })
        this.logOutMessageLocator = page.getByText('You logged out of the secure')
        this.invalidUsernameMessageLocator = page.getByText('Your username is invalid!')
        this.invalidPasswordMessageLocator = page.getByText('Your password is invalid!')
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
    async invalidUsernameMessageVerification():Promise<void>{
       await expect(this.invalidUsernameMessageLocator).toContainText('Your username is invalid!')
    }
    async invalidPasswordMessageVerification():Promise<void>{
        await expect(this.invalidPasswordMessageLocator).toContainText('Your password is invalid!')
    }
}