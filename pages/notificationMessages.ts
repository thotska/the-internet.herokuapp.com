import {expect, Locator, Page} from "@playwright/test"

export class NotificationMessagesPage{

    notificationMessageLocator: Locator
    clickHereLinkLocator: Locator
    blueBoxLocator: Locator

    constructor(page: Page){
        this.notificationMessageLocator = page.getByRole('heading', { name: 'Notification Message' })
        this.clickHereLinkLocator = page.getByRole('link', { name: 'Click here' })
        this.blueBoxLocator =  page.locator('div[id="flash"]')
    }

    async titleMessageVerification(): Promise<void>{
       await expect(this.notificationMessageLocator).toHaveText("Notification Message")
    }
    async clickingOnClickHereLink(): Promise<void>{
        await this.clickHereLinkLocator.click()
    }
    async verifyingBlueBoxMessage(messages: string[]): Promise<void>{
        let actualText = await this.blueBoxLocator.innerText()
        await expect(messages).toBe(actualText)
    }
}