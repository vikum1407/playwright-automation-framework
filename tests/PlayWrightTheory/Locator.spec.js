//const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('Playwright locators', async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");

    // using property - approach 01
    await page.locator('id=login2').click();

    // using property - approach 02
    await page.click('id=login2');

    /**
     * automate login
     */

    //how to send value to the test box - approach 01
    await page.locator('#loginusername').fill('vikum') //or
    

    //how to send value to the test box - approach 02
    await page.fill('#loginusername', 'vikum');

    //how to send value to the test box - approach 03
    await page.type('#loginusername', 'vikum');

    await page.locator('#loginpassword').fill('1qaz2wsx@')

    /**
     * verify the visibility action on a element
     */

    const logOut = await page.locator("//a[normalize-space()='Log out']");
    await expect(logOut).toBeVisible();

    await page.close();

    /**
     * Handle multiple web elements
     */

    //If some time multiple locators will not capture at one, use following
    page.waitForSelector("/a");

    const links = await page.$$('/a')

    //after that I need to extract the text of the each links
    for(const ln of links){
        const linkText = await ln.textContent(); //get the text of the link
        console.log(linkText)
    }


})