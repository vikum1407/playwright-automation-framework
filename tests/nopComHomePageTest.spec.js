import {test, expect} from '@playwright/test'
import {HomePage} from '../page_objects/HomePage'

test('nopCommer Home Page Validations', async ({page}) =>{

    const homePage = new HomePage(page);
    
    await homePage.gotoHomePage();
    await homePage.validateLogo();
    await homePage.validateRegBtn();
    await homePage.validateLoginBtn();
    await homePage.validateSearchBtn();
    await homePage.validateWhiteListBtn();
    await homePage.validateShoppingCart();
    
    await page.waitForTimeout(3000);
        
})

