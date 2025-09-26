import{test} from "@playwright/test"
import { Homepage} from "../pages/Homepage" 

test("Internet main title validation", async ({page}) => {
    let homepage = new Homepage(page)

    await page.goto('https://the-internet.herokuapp.com/')
    await homepage.homepageMainTitleValidation()
})