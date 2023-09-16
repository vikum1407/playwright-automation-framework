import {test, expect} from '@playwright/test'

/**
 * Playwright Frame = https://playwright.dev/docs/api/class-frame
 */

test('IFrame', async({page}) =>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    // Get the all iframes on the page
    const iframes = await page.frames();
    console.log("Total IFrames: ",iframes.length);

    /**
     * Approach 01 : using name or url
     */
    const frame1 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"});
    frame1.fill("[name='mytext1']", 'Hello Vikum');

    /**
     * Approach 02 : using name or url
     */
    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
    inputbox.fill("Hello pavi")

    await page.waitForTimeout(5000);

});


test('Inner or Nested IFrames', async({page}) =>{

    await page.goto("https://ui.vision/demo/webtest/frames/");


    /**
     * Approach 01 : using name or url
     */
    const frame3 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});
    frame3.fill("[name='mytext3']", 'Hello Vikum');

    /**
     * Nested Frame handle
     */
    const childFrames = await frame3.childFrames();
    await childFrames[0].locator("//div[@id='i5']//div[@class='AB7Lab Id5V1']").check();

    await page.waitForTimeout(5000);

});