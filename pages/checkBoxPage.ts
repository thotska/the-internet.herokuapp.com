import { expect, Locator, Page } from "@playwright/test"

export class CheckBoxPage{

    checkBox1Locator: Locator
    checkBox2Locator: Locator

    constructor(page: Page) {
        this.checkBox1Locator = page.getByRole('checkbox').first()
        this.checkBox2Locator = page.getByRole('checkbox').nth(1)
    }

    async firstCheckBoxValidation():Promise<void>{
      await  expect (await this.checkBox1Locator).not.toBeChecked()
      await expect(await this.checkBox2Locator).toBeChecked()
    }

    async clickCheckBox1():Promise<void>{
        await this.checkBox1Locator.click()
    }
    async secondCheckBoxValidation():Promise<void>{
        await expect(this.checkBox1Locator).toBeChecked()
    }
}