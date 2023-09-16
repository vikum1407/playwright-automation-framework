import {test, expect} from '@playwright/test';
import { ComputerPage } from '../page_objects/ComputerPage'
import { HomePage } from '../page_objects/HomePage'
import { LoginPage } from '../page_objects/LoginPage'

test('Compueter-Desktop Page Automation', async ({page}) =>{

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const computerPage = new ComputerPage(page);

    await homePage.gotoHomePage();
    // await homePage.clickLoginBtn();

    // await loginPage.login("viki121@gmail.com", "1qazWSX@");

    // await computerPage.computerLabelValidation();
    // await computerPage.comItemListValidation();
    // await computerPage.clickDesktopIcon();
    await computerPage.desktopOption();
    //await computerPage.clickDesktopIcon("Build your own computer");
    await computerPage.clickBuildComputerIcon();
    await computerPage.labelValidation();
    await computerPage.productImgValidation();
    await computerPage.hddValidation();
    await computerPage.osValidation();
    await computerPage.swValidation();
    await computerPage.priceValidation();
    await computerPage.addToCartValidation();
    await computerPage.whitelistBtnValidation();
    await computerPage.compareListBtnValidation();
    await computerPage.emailFrdValidation();

    await homePage.logoutHomePage();
})

test('Compueter-Notebooks Page Automation', async ({page}) =>{

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const computerPage = new ComputerPage(page);

    await homePage.gotoHomePage();
    // await homePage.clickLoginBtn();

    // await loginPage.login("viki121@gmail.com", "1qazWSX@");

    // await computerPage.computerLabelValidation();
    // await computerPage.comItemListValidation();
    // await computerPage.clickDesktopIcon();
    await computerPage.notebooksOption();
    await computerPage.clickAzusesIcon();
    await computerPage.labelValidation();
    await computerPage.noteBooksImgValidation();
    await computerPage.shortDescriptionValidation();  
    await computerPage.informationBarValidation();
    await computerPage.azusPriceValidation();
    await computerPage.noteAddToCartValidation();
    await computerPage.noteWishBtnValidation();
    await computerPage.noteCompareListBtnValidation();
    await computerPage.emailFrdValidation();

    await homePage.logoutHomePage();
})


test('Compueter-Software Page Automation', async ({page}) =>{

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const computerPage = new ComputerPage(page);

    await homePage.gotoHomePage();
    // await homePage.clickLoginBtn();

    // await loginPage.login("viki121@gmail.com", "1qazWSX@");

    // await computerPage.computerLabelValidation();
    // await computerPage.comItemListValidation();
    // await computerPage.clickDesktopIcon();
    await computerPage.softwareOption();
    await computerPage.clickWindowsProIcon();
    await computerPage.labelValidation();
    await computerPage.windowsImgValidation();
    await computerPage.shortDescriptionValidation();
    await computerPage.softwareInfoValidation();
    await computerPage.softPriceValidation();
    await computerPage.softAddToCartValidation();
    await computerPage.softWishBtnValidation();
    await computerPage.noteCompareListBtnValidation();
    await computerPage.emailFrdValidation();

    await homePage.logoutHomePage();
})