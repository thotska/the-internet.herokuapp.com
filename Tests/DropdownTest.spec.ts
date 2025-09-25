import {test, expect} from '@playwright/test'
import { Homepage } from '../pages/Homepage'
import { DropdownPage } from '../pages/dropdownPage'

test("Selection of option", async ({page}) => {
    let homepage = new Homepage(page)
    let dropdownPage = new DropdownPage(page)

    await page.goto('https://the-internet.herokuapp.com/')
    await homepage.clickOnDropdownLink()
    await dropdownPage.selectDropdownField("Option 1")
    await dropdownPage.validateOptionSelection("1")
})


test('Validation of option 2 selection', async ({page}) => {
    let homepage = new Homepage(page)
    let dropdownPage = new DropdownPage(page)

    await page.goto('https://the-internet.herokuapp.com/')
    await homepage.clickOnDropdownLink()
    await dropdownPage.selectDropdownField("Option 2")
    await dropdownPage.validateOptionSelection("2")
})