import {test, expect} from '@playwright/test'

test('Page screenshot', async({page}) =>{

    await page.goto("https://demo.nopcommerce.com/computers");
    await page.screenshot({path: 'tests/screenshots/'+Date.now()+'HomePage.png'}); //here getting the Date method
    //because of, the same SS same from the same name. so I need to save it through the timestamp.

});


test('Full Page screenshot', async({page}) =>{
    await page.goto("https://demo.nopcommerce.com/computers");
    await page.screenshot({path: 'tests/screenshots/'+Date.now()+'FullPage.png', fullPage: true}); 
});


test('Element screenshot', async({page}) =>{
    await page.goto("https://demo.nopcommerce.com/computers");
    await page.locator("//div[@class='item-grid']").screenshot({path: 'tests/screenshots/'+Date.now()+'Computers.png'}); 

});

/**
 * To get the screenshot at the end of the each test cases, Please check 'playwright.config' file's 'use' tag
 * There is a 'screenshot: 'on' tag
 */

test.only('Playwright locators', async({page})=>{

    /**
     * Execute following code and check 'playwright-report' folder 'index.html report, there will be the screenshot attached to the html report.
     * npx playwright test tests/TakeScreenshots.spec.js --project chromium --headed show-report
     */

    await page.goto("https://www.demoblaze.com/index.html");

    await page.getByRole('link', { name: 'Log in'}).click();

    await page.locator('#loginusername').fill('vikum') ;
    await page.locator('#loginpassword').fill('1qaz2wsx@');
    await page.getByRole('button', { name: 'Log in'}).click();

})