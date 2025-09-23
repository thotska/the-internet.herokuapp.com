import { expect, Locator, Page } from "@playwright/test"

export class Homepage {

    homepageMainTitle: Locator

    constructor(page: Page) {
        this.homepageMainTitle = page.getByRole('heading', { name: 'Welcome to the-internet' })
    }

    homepageMainTitleValidation() {
        expect(this.homepageMainTitle).toHaveText('Welcome to the-internet')
    }
}