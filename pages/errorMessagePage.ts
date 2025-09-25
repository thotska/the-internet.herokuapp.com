import { expect, Locator, Page } from "@playwright/test"

export class ErrorMessagePage {

    errorMessageLocator: Locator

    constructor(page: Page) {
        this.errorMessageLocator = page.getByRole('heading', { name: 'Internal Server Error' })
    }

    async validateErrorMessage(): Promise<void> {
        await expect(this.errorMessageLocator).toHaveText("Internal Server Error")
    }
}