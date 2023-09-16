import {test, expect} from '@playwright/test'

test('Table multi data selection', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("#productTable");

    //total columns
    const columns = await table.locator("thead tr th");
    console.log("Column No: ", await columns.count());
    expect(await columns.count()).toBe(4);

    //total rows
    const rows = await table.locator("tbody tr")
    console.log("Table rows: ", await rows.count());
    expect(await rows.count()).toBe(5);

    // IMPORTANT 01: Select a option from rows
    const matchRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })

    await matchRow.locator('input').check();

    /**
     * Select multiple options with using re-usable fuction
     */
    await selectMultiProduct(rows, page, 'Product 1');
    await selectMultiProduct(rows, page, 'Product 3');
    await selectMultiProduct(rows, page, 'Product 5');


    /**
     * Pagination:
     */

    //outter for loop for row
    for(let i=0; i<await rows.count; i++){
        const row = rows.nth(i);
        const tds = row.locator('td'); 

        //inner for loop for column - here 'tds.count()-1' mean remove the last column due to select option no need.
        for(let j=0; j<await tds.count()-1; i++){
            console.log(await tds.nth(j).textContent())
        }

    }


    await page.waitForTimeout(5000);

});


test('Read data from first page in a Table', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("#productTable");

    //total columns
    const columns = await table.locator("thead tr th");
    //console.log("Column No: ", await columns.count());
    expect(await columns.count()).toBe(4);

    //total rows
    const rows = await table.locator("tbody tr")
    //console.log("Table rows: ", await rows.count());
    expect(await rows.count()).toBe(5);



    /**
     * Select multiple row data from single page-  first page
     */

    //outter for loop for row
    for(let i=0; i<await rows.count; i++){
        const row = rows.nth(i);
        const tds = row.locator('td'); 

        //inner for loop for column - here 'tds.count()-1' mean remove the last column due to select option no need.
        for(let j=0; j<await tds.count()-1; i++){
            console.log(await tds.nth(j).textContent());
        }

    }


    await page.waitForTimeout(5000);

});


test.only('Table pagination', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("#productTable");

    //total columns
    const columns = await table.locator("thead tr th");

    //total rows
    const rows = await table.locator("tbody tr");

    const pages = await page.locator('.pagination li a');
    console.log("No of Pages: ", await pages.count());

        // this for loop for click and continue the paginations
        for(let p=0; p<await pages.count(); p++){
            if(p>0){
                await pages.nth(p).click();
            }

            //outter for loop for row
            for(let i=0; i<await rows.count; i++){
            const row = rows.nth(i);
            const tds = row.locator('td'); 

            //inner for loop for column - here 'tds.count()-1' mean remove the last column due to select option no need.
            for(let j=0; j<await tds.count()-1; i++){
                console.log(await tds.nth(j).textContent());
            }
        }

    await page.waitForTimeout(5000);

    }

    await page.waitForTimeout(5000);

});


    /**
     * Select multiple options with using re-usable fuction
     */
    async function selectMultiProduct(rows, page, name){
        const matchRow = rows.filter({
            has: page.locator('td'),
            hasText: name
        })
    await matchRow.locator('input').check();
    }