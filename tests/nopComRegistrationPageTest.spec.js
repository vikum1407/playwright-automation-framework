import {test, expect} from '@playwright/test'
import { HomePage } from '../page_objects/HomePage'
import { RegistrationPage} from '../page_objects/RegistrationPage'


test('Registration', async ({page}) =>{

    const registrationPage = new RegistrationPage(page);
    const homePage = new HomePage(page);

    await homePage.gotoHomePage();
    await homePage.clickRegistrationBtn();

    await registrationPage.validateRegistrationLabel();
    await registrationPage.validatePersonalDetails();
    await registrationPage.validateCompanyDetailsLabel();
    await registrationPage.validateOptions();
    await registrationPage.validateNewsletterRadio();
    await registrationPage.registration("viku", "suga", "14", "4", "1991", "viki121@gmail.com", "wso2", "1qazWSX@", "1qazWSX@");

    await page.waitForTimeout(3000);


})

