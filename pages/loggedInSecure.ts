import { expect, Locator, Page } from "@playwright/test"

export class LoggedInSecured {

    successMessageLocator: Locator
    logoutButtonLocator: Locator

    constructor(page: Page) {
        this.successMessageLocator = page.getByText('You logged into a secure area')
        this.logoutButtonLocator = page.getByRole('link', { name: 'Logout' })
    }

    async successMessageVerification(): Promise<void> {
       await expect( this.successMessageLocator).toContainText('You logged into a secure area!')
    }
     async clickLogOutbutton():Promise<void>{
        await this.logoutButtonLocator.click()
    }



}

