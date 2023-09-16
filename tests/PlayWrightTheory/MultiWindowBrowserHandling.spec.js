import {test, expect, chromium} from '@playwright/test'

test('Mutiple browser window handling', async() =>{

    /**
     * First you have to create your own page fixture for that instead of default page fixture
     */
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");

    /**
     * If we are clicking the button, next window will open in another brower window.
     * So first of all, we have to open a new promise to tract the event
     */

    const pagePromise = context.waitForEvent('page');
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM");

    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000)

    await browser.close();
})