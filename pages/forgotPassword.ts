import { Locator, Page } from "@playwright/test"

export class ForgotPassword {

    emailFieldLocator: Locator
    retrievePasswordButtonLocator: Locator

    constructor(page: Page) {
        this.emailFieldLocator = page.getByRole('textbox', { name: 'E-mail' })
        this.retrievePasswordButtonLocator = page.getByRole('button', { name: 'Retrieve password' })
    }
    
    async typingInEmailField(validEmail: string): Promise<void> {
        await this.emailFieldLocator.fill(validEmail)
    }

    async clickOnRetrievePassword(): Promise<void> {
        await this.retrievePasswordButtonLocator.click()
    }
}