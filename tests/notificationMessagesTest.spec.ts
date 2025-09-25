import {test} from "@playwright/test"
import { Homepage } from "../pages/Homepage"
import { NotificationMessagesPage } from "../pages/notificationMessages"

test("Verification of title message and ability to click on 'click here' link ", async ({page}) => {
    let homepage = new Homepage(page)
    let notificationMessagePage =  new NotificationMessagesPage(page)

    await page.goto('https://the-internet.herokuapp.com/')
    await homepage.clickOnNotificationMessages()
    await notificationMessagePage.titleMessageVerification()
    await notificationMessagePage.clickingOnClickHereLink()
    await notificationMessagePage.verifyingBlueBoxMessage(["[Action unsuccessful, please try again]"]) 

})