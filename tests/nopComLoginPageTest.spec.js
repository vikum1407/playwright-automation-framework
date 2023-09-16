import {test, expect} from '@playwright/test'
import { HomePage } from '../page_objects/HomePage'
import { LoginPage } from '../page_objects/LoginPage'


test('Login validation', async ({page}) =>{

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await homePage.gotoHomePage();
    await homePage.clickLoginBtn();
    
    await loginPage.validateSignInLabel();
    await loginPage.validateNewCustomLabel();
    await loginPage.validateReturnCusLabel();
    await loginPage.validateRemBtn();
    await loginPage.validateForgotpw();
    await loginPage.validateAboutLabel();
    await loginPage.login("viki121@gmail.com", "1qazWSX@");
})