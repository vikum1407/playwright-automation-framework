import {test, expect} from '@playwright/test'

test('Keybord Actions', async({page}) =>{

    await page.goto("https://gotranscript.com/text-compare");

    /**
     * playwright keyboard actions - https://playwright.dev/docs/api/class-keyboard
     */

    //await page.locator('[name="text1"]').fill("Hello Vikum.. Welcome to Playwright");
    await page.type('[name="text1"]', "Hello Vikum.. Welcome to Playwright");

    /**
     * Ctrl + A
     */
    await page.keyboard.press('Control+A');

    /**
     * Ctrl + C
     */
    await page.keyboard.press('Control+C');

    /**
     * Tab
     */
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    /**
     * Ctrl + V
     */
    await page.keyboard.press('Control+V')
    

    await page.waitForTimeout(5000);

})