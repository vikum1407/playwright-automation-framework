import {test, expect} from '@playwright/test'

test('Assertions', async({page}) =>{
    /**
     * There are two different assertion, there are Hard and Soft assertions.
     * In playwright very assertion has soft assertion
     */
    await page.goto("https://opensource-demo.orangehrmlive.com/");

    /**URL Validation */
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/');

    /**Page Title validation */
    await expect(page).toHaveTitle('OrangeHRM');

    /**Element visibility validation */
    await expect(page.locator("img[alt='company-branding']")).toBeVisible();

    /**Element Enability validation */
    await expect(page.locator("button[type='submit']")).toBeEnabled();
    

})