import { expect, Locator, Page } from "@playwright/test"

export class Homepage {

    homepageMainTitle: Locator
    dropdownLocator: Locator
    forgotPasswordLinkLocator: Locator

    constructor(page: Page) {
        this.homepageMainTitle = page.getByRole('heading', { name: 'Welcome to the-internet' })
        this.dropdownLocator = page.getByRole('link', { name: 'Dropdown' })
        this.forgotPasswordLinkLocator = page.getByRole('link', { name: 'Forgot Password' })
    }

    async homepageMainTitleValidation(): Promise<void> {
        await expect(this.homepageMainTitle).toHaveText('Welcome to the-internet')
    }
    
    async clickOnDropdownLink(): Promise<void> {
        await this.dropdownLocator.click()
    }
    
    async clickForgotPasswordLink(): Promise<void> {
        await this.forgotPasswordLinkLocator.click()
    }
}