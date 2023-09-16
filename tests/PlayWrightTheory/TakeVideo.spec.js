import {test, expect} from '@playwright/test'

    /**
     * To get the screenshot at the end of the each test cases, Please check 'playwright.config' file's 'use' tag
     * There is a 'video: 'on' tag
     */

test('Take a video', async({page}) =>{

    await page.goto("https://www.demoblaze.com/index.html");

    await page.getByRole('link', { name: 'Log in'}).click();

    await page.locator('#loginusername').fill('vikum') ;
    await page.locator('#loginpassword').fill('1qaz2wsx@');
    await page.getByRole('button', { name: 'Log in'}).click();
})