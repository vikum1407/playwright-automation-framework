const{test, expect} = require('@playwright/test') //the main packages we need to import
/**
 * 'test' is require to test the page.
 * 'expect' is require to validate the test.
 */

test('Home Page', async ({page})=>{ // this is annonymous function, here 'page' is fixture in playwright

    await page.goto("https://www.demoblaze.com/index.html")

    /**
     * Why we are using 'async' and 'await' keyword:
     * 
     * Javascript is a asyncronized programming language. What does mean asyncronized, If there are 10 test cases
     * It'll run line by line or one test after test in syncronized programming. but in asyncronized programming it
     * doesn't. It'll be executing parallel. it mean no steps depends on others. 
     * So those asyncrozed behavior handle by the 'Promise' in javascript.
     * 
     * So above code fist we are using 'async' keyword. it meant code will return the promise
     * Then 'await' keyword is use to wait the 'async' return promise
     * 
     * So 'await' keyword is placed to use page[fixture]
     */

    let pageTitle = await page.title();
    console.log("Page Title: ", pageTitle); 

    // validations
    await expect(page).toHaveTitle('STORE');

    const pageURL = await page.url();
    console.log('Page URL: ',pageURL)

    //verify the url
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();
})