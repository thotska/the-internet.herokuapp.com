import { expect, Locator, Page } from "@playwright/test"

export class DropdownPage{

    dropDownFieldLocator: Locator
    constructor(page: Page){
        this.dropDownFieldLocator = page.locator('select[id="dropdown"]')
         }

    async selectDropdownField(option: string): Promise<void>{
        this.dropDownFieldLocator.selectOption(option)
    }
    async validateOptionSelection(value: string): Promise<void>{
        await expect(this.dropDownFieldLocator).toHaveValue(value)
    }
}