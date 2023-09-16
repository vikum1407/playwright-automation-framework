import {test, expect} from '@playwright/test'

test('Upload single File', async({page}) =>{
    
    await page.goto("https://foundit.in");

    await page.waitForSelector("//div[@class='heroSection-buttonContainer_secondaryBtn secondaryBtn']")
    await page.locator("//div[@class='heroSection-buttonContainer_secondaryBtn secondaryBtn']").click();

    await page.locator("//input[@id='file-upload']").setInputFiles('tests/uploadfiles/file1.txt');
    await page.waitForTimeout(5000);

});


test.only('Upload multiple Files', async({page}) =>{
    
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    (await page.waitForSelector("#filesToUpload")).setInputFiles(['tests/uploadfiles/file1.txt', 'tests/uploadfiles/file2.txt']);
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('file1.txt');
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('file2.txt');
    await page.waitForTimeout(5000);

    // Remove files
    await page.locator("#filesToUpload").setInputFiles([]);
    await page.waitForTimeout(5000);

    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');

});
