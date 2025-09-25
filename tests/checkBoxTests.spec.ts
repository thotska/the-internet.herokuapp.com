import {test, expect} from '@playwright/test'
import { Homepage } from '../pages/Homepage'
import { CheckBoxPage } from '../pages/checkBoxPage'


test ("Checkbox validation", async ({page}) => {
    let homepage = new Homepage(page)
    let checkBoxPage = new CheckBoxPage(page)

   await page.goto('https://the-internet.herokuapp.com/')
   await homepage.clickOnCheckBox()
   await checkBoxPage.firstCheckBoxValidation()
   await checkBoxPage.clickCheckBox1()
   await checkBoxPage.secondCheckBoxValidation()

})