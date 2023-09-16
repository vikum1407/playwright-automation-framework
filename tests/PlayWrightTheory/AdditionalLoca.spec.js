import {test, expect} from '@playwright/test'

test('Additional Locators', async ({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com")

    // Logo validation
    await expect(page.locator("//img[@alt='company-branding']")).toBeVisible();

    // Login title validation
    await expect(page.locator(".oxd-text.oxd-text--h5.orangehrm-login-title")).toBeVisible();

    // username password validation
    const username = await page.locator("//input[@placeholder='Username']").type("admin");
    const password = await page.locator("//input[@placeholder='Password']").type("admin123");
    await page.locator("//button[@type='submit']").click();
})