import { test, expect } from '@playwright/test'
import {HomePage} from '../page_objects/HomePage'
import {ElectronicPage} from '../page_objects/ElectronicsPage'

test('Electronic Page - Camera and Photo page test', async({page}) =>{
    const homepage = new HomePage(page);
    const electronicPage = new ElectronicPage(page);

    await homepage.gotoHomePage();
    await homepage.clickCameraPhotoPage();

    await electronicPage.varifyLabel();
    await electronicPage.verifyNikonD();
    await electronicPage.varifyImg();
    await electronicPage.verifyRating();
    await electronicPage.verifyDisplayPrice();
    await electronicPage.varifyDisplayAddtoCart();
    await electronicPage.verifyDisplayCompareList();
    await electronicPage.verifyDisplayWishList();
 
    await electronicPage.clickNikonD550();
    await electronicPage.verifyNikonMailLabel();
    await electronicPage.verifyShortDescription();
    await electronicPage.verifyIntenalImg();
    await electronicPage.verifyFrdMail();

})