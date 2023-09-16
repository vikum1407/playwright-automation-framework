import {test, expect} from '@playwright/test'

/**
 * Dialogs or Alerts in playwright
 *  Documentation - https://playwright.dev/docs/dialogs
 * 
 * Dialogs or alerts are automatically dismissed by playwright. It meant playwright are automatically handle the alerts.
 * If you need to do some validation on the alerts or dialogs you can do.
 */

test('Alert with ok button click', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
     
    // 1. Enabling alert window handle
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am alert box!!!');
        await dialog.accept();
    })

    // 2. Click the the option you need to get the alert
    await page.click("//button[@onclick='myFunctionAlert()']");
    page.waitForTimeout(5000);
});

test('Alert with confirm button click - here having both OK and Cancle buttons - this is OK', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
     
    // 1. Enabling alert window handle
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
    })

    // 2. Click the the option you need to get the alert
    await page.click("//button[@onclick='myFunctionConfirm()']");
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");

    page.waitForTimeout(5000);
});

test('Alert with confirm button click - here having both OK and Cancle buttons - this is Cancle', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
     
    // 1. Enabling alert window handle
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.dismiss(); 
    })

    // 2. Click the the option you need to get the alert
    await page.click("//button[@onclick='myFunctionConfirm()']");
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed Cancel!");

    page.waitForTimeout(5000);
});


test('Prompt dislog box - here sending text to the textbox', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
     
    // 1. Enabling alert window handle
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain("Harry Potter");
        await dialog.accept("Vikum"); 
    })

    // 2. Click the the option you need to get the alert
    await page.click("//button[@onclick='myFunctionPrompt()']");
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello vikum! How are you today?");

    page.waitForTimeout(5000);

    
});
