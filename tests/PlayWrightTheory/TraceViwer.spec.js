import {test, expect} from '@playwright/test'

    /**
     * To get the trace viwer at the end of the each test cases, Please check 'playwright.config' file's 'use' tag
     * There is a 'trace: 'on' tag.
     * 
     * Then execute following command:-
     *      npx playwright show-trace test-results\TakeVideo-Take-a-video-chromium\trace.zip
     */

test('Trace Viwer', async({page}) =>{

    await page.goto("https://www.demoblaze.com/index.html");

    await page.getByRole('link', { name: 'Log in'}).click();

    await page.locator('#loginusername').fill('vikum') ;
    await page.locator('#loginpassword').fill('1qaz2wsx@');
    await page.getByRole('button', { name: 'Log in'}).click();
})