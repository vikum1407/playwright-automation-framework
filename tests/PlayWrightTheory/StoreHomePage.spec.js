import {test, expect} from '@playwright/test'

test('Store Home Page Automation', async ({page}) =>{

    await page.goto("https://www.demoblaze.com/index.html")

    //page title validation
    const pageTitle = await page.title();
    await expect(page).toHaveTitle('STORE');

    //logo validation
    const logo = await page.locator("a[id='nava'] img");
    await expect(logo).toBeVisible();

    //company name
    await expect(page.locator('#nava')).toBeVisible();

    //Home button validation
    await expect(page.locator("li[class='nav-item active'] a[class='nav-link']")).toBeVisible();

    //Contact button validation
    await expect(page.locator("a[data-target='#exampleModal']")).toBeVisible();

    //Home button text validation
    const homeButn = await page.locator("li[class='nav-item active'] a[class='nav-link']");
    await expect(homeButn).toContainText('Ho');
    await expect(homeButn).toHaveText('Home (current)');

    //validate page headers
    const pageHeaders = await page.$$("//li[@class='nav-item']//a");

    for(let headers of pageHeaders){
        let head = await headers.textContent();
        console.log(head)
    }
    
    await page.locator("//a[@id='signin2']").click();

    //singup label validation
    await expect(page.locator("//h5[@id='signInModalLabel']")).toHaveText('Sign up');

    //send username password to the signup page
    const username = await page.locator('#sign-username').fill("viku1407@gmail.com");
    const password = await page.locator("#sign-password").type("1qaz2wsx@");
    await page.locator("button[onclick='register()']").click();

    //click login button
    

    await page.close();
})