import {test, expect} from '@playwright/test'
import { Homepage } from '../pages/Homepage'
import { DropdownPage } from '../pages/dropdownPage'

test("Selection of option", async ({page}) => {
    let homepage = new Homepage(page)
    let dropdownPage = new DropdownPage(page)

    await page.goto('https://the-internet.herokuapp.com/')
    await homepage.clickOnDropdownLink()
    await dropdownPage.selectDropdownField("Option 1")
})

