import {test, expect} from '@playwright/test'

test('Mouse Hover Action', async({page}) =>{

    await page.goto("https://demo.nopcommerce.com/");

    const DesktopMainMenue = await page.locator("(//a[normalize-space()='Computers'])[1]")
    const NotebookSubMenue = await page.locator("//ul[@class='top-menu notmobile']//a[normalize-space()='Notebooks']")

    await DesktopMainMenue.hover();
    await NotebookSubMenue.click();

    await page.waitForTimeout(5000)
});


test('Mouse RightClick Action', async({page}) =>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const rightClickBtn = await page.locator("//span[@class='context-menu-one btn btn-neutral']");
    await rightClickBtn.click({rightClickBtn: 'right'});

    await page.waitForTimeout(5000)
});


test('Mouse DoubleClick Action', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const copyFiled = await page.locator("(//button[normalize-space()='Copy Text'])[1]");
    const secondField = await page.locator("//input[@id='field2']");

    await copyFiled.dblclick();

    await expect(secondField).toHaveValue("Hello World!")

    await page.waitForTimeout(5000)
});


test.only('Mouse Drag and Drop Action - Approach 01', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const sourceEle = await page.locator("//div[@id='draggable']");
    const dropField = await page.locator("//div[@id='droppable']");

    await sourceEle.hover();
    await page.mouse.down();

    await dropField.hover();
    await page.mouse.up();

    await page.waitForTimeout(5000)
});


test.only('Mouse Drag and Drop Action - Approach 02', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const sourceEle = await page.locator("//div[@id='draggable']");
    const dropField = await page.locator("//div[@id='droppable']");

    await sourceEle.dragTo(dropField);

    await page.waitForTimeout(5000)
});