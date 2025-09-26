import { expect, Locator, Page } from "@playwright/test"

export class Homepage {

    homepageMainTitle: Locator
    dropdownLocator: Locator
    forgotPasswordLinkLocator: Locator
    notificationMessages: Locator
    checkBoxLocator: Locator
    formAuthentication: Locator

    constructor(page: Page) {
        this.homepageMainTitle = page.getByRole('heading', { name: 'Welcome to the-internet' })
        this.dropdownLocator = page.getByRole('link', { name: 'Dropdown' })
        this.forgotPasswordLinkLocator = page.getByRole('link', { name: 'Forgot Password' })
        this.notificationMessages = page.getByRole('link', { name: 'Notification Messages' })
        this.checkBoxLocator = page.getByRole('link', { name: 'Checkboxes' })
        this.formAuthentication = page.getByRole('link', { name: 'Form Authentication' })
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
    async clickOnNotificationMessages(): Promise<void> {
        await this.notificationMessages.click()
    
    }
    async clickOnCheckBox(): Promise<void> {
        await this.checkBoxLocator.click()
    }
    async clickOnFormAuthenticationLink(): Promise<void> {
        await this.formAuthentication.click()
    }
}