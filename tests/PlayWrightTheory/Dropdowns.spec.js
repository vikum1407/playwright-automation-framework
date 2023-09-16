import {test, expect} from '@playwright/test'

test('Select tag drop downs', async ({page}) =>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    /**
     * There are multi ways of selecting a option from 'select' tag dropdowns
     */

    //There are multiple way to select
    //await page.locator("#country").selectOption("Japan"); // using visible text
    //await page.locator("#country").selectOption({label:'Australia'}); // using label
    //await page.locator("#country").selectOption({value:'uk'}); // using value
    //await page.locator("#country").selectOption({index:3}); // using index

    await page.selectOption("#country", 'Australia');

    /**
     * Assertions: 
     */

    // 1. count dropdown options: 
    const countries = await page.locator("#country option");
    await expect(countries).toHaveCount(10);

    // count dropdown option: approach 2
    const lists = await page.$$("#country option");
    console.log("Country Count: ", lists.length);
    await expect(lists.length).toBe(10);

    // Check the required value from the dropdown - approach 1
    const countryList = await page.locator("#country").textContent();
    await expect(countryList.includes("Japan")).toBeTruthy();

    // Check the required value from the dropdown - approach 2(using for loop)
    const countryOptions = await page.$$("#country option");

    let status = false;
    for(const listOptions of countryOptions){
        if (listOptions.textContent().includes("India")){
            status=true;
            break;
        }
    }

    expect(status).toBeTruthy();

    /**
     * This is the another way of selecting option from dropdown
     */

    const countryOptions2 = await page.$$("#country option");

    for(const listOptions2 of countryOptions2){
        let value = await listOptions2.textContent();
        if (value.includes("India")){
            
            await page.selectOption("#country", value);
            break;
        }
    }

    await page.waitForTimeout(5000);
})

test('Select multiple choices from select tag dropdowns', async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.selectOption("#colors", ['Red', 'Blue', 'Green'])

    /**
     * Assertions: 
     */

    // 01. check number of options in dropdowns
    const list = await page.locator("#color option");
    await expect(list).toHaveCount(5);

    // check number of option using for loop

    const colorList = await page.$$("color option");
    const colorLen = colorList.length;

    await expect(colorLen).toBe(5)

    //check required text content out from the list
    await expect(colorList.textContent("Red")).toBeTruthy();


    await page.waitForTimeout(50000);
})

test('Boostrap dropdow automation', async({page})=>{

    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

    const choices = await page.locator("ul>li label input");
    
    await expect(choices).toHaveCount(11);

    //check the length
    const listChoice = page.$$("ul>li label input");
    await expect((await listChoice).length).toBe(11);

    // select multiple options
    for (const lists of listChoice){
       // console.log(lists.textContent());
       const value  = await lists.textContent();

        if(value.includes("Agular") && value.includes("Java")){
            await lists.click();
        }
    }
})

test('Auto Complete dropdown', async({page})=>{

    await page.goto("https://www.rebus.in/");

    await page.locator("#src").fill("Delhi");
    // Here after passing text to the text box you have to wait for get the list of suggestions. 
    // So use 'waitForSeletor' method
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

    const list = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
    for(const lists of list){
        if(lists.textContent().includes("Anand Vihar")){
            await lists.click();
            break;
        }
    }

    await page.waitForTimeout(3000);
})

test('Hidden Items capture from dropdown', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");

    await page.locator("[name='username']").fill("admin");
    await page.locator("[name='password']").fill("admin123");
    await page.locator("[type='submit']").click();

    await page.locator("//span[normalize-space()='PIM']").click();

    await page.locator("//div[@class='oxd-select-text oxd-select-text--focus']//div[@class='oxd-select-text-input'][normalize-space()='-- Select --']")

    const list = await page.$$("//div[@role='listbox']//span");

    for(const lists of list){
        const joblist = await lists.textContent();
        if(joblist.includes("QA Engineer")){
            await lists.click;
            break;
        }
    }

    await waitForTimeout(5000);
})