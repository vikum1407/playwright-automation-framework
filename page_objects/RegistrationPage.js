import {expect} from '@playwright/test'
import {CommonDropDowns} from '../commonMethods/CommonMethods'

exports.RegistrationPage = 

class RegistrationPage{

    constructor(page) {
        this.page = page;
        this.registrationLabel = "//h1[normalize-space()='Register']";

        // Personal Details Object Repositories
        this.personalDetails = "//strong[normalize-space()='Your Personal Details']";
        this.maleRadio = "//input[@id='gender-male']";
        this.femaleRadio = "//input[@id='gender-female']";
        this.firstName = "//input[@id='FirstName']";
        this.lastName = "//input[@id='LastName']";
        this.date = "//select[@name='DateOfBirthDay']";
        this.month = "//select[@name='DateOfBirthMonth']";
        this.year = "//select[@name='DateOfBirthYear']";
        this.email = "//input[@id='Email']";

        // Company Details Object Repositories
        this.companyDetailsLabel = "//strong[normalize-space()='Company Details']";
        this.companyName = "//input[@id='Company']";

        this.options = "//strong[normalize-space()='Options']";
        this.newsletterRadio = "//input[@id='Newsletter']";

        // Password Object Repositories
        this.password = "//input[@id='Password']";
        this.confirmPassword = "//input[@id='ConfirmPassword']";
        this.registrationButton = "//button[@id='register-button']";

        this.dates = "//select[@name='DateOfBirthDay']//option";
        this.months = "//select[@name='DateOfBirthYear']//option";
        this.years = "//select[@name='DateOfBirthMonth']//option";
        
    }

    async validateRegistrationLabel(){
        await expect(this.page.locator(this.registrationLabel)).toBeVisible();
    }

    async validatePersonalDetails(){
        await expect(this.page.locator(this.personalDetails)).toBeVisible();
    }

    async validateCompanyDetailsLabel(){
        await expect(this.page.locator(this.companyDetailsLabel)).toBeVisible();
    }

    async validateOptions(){
        await expect(this.page.locator(this.options)).toBeVisible();
    }

    async validateNewsletterRadio(){
        await expect(this.page.locator(this.newsletterRadio)).toBeChecked();
    }

    async registration(fname, lname, dday, dmonth, dyear, femail, fcompanyName, fpassword, conPassowrd){
        await this.page.locator(this.maleRadio).click();
        await this.page.locator(this.firstName).fill(fname);
        await this.page.locator(this.lastName).fill(lname);

        const commonMethod = new CommonDropDowns(this.page);

        commonMethod.SelectDateDropDowns(this.date, dday);
        //await this.page.locator(this.date).selectOption(dday);

        commonMethod.SelectDateDropDowns(this.month, dmonth)
        //await this.page.locator(this.month).selectOption(dmonth);

        commonMethod.SelectDateDropDowns(this.year, dyear);
        //await this.page.locator(this.year).selectOption(dyear);

        await this.page.locator(this.email).fill(femail);
        await this.page.locator(this.companyName).fill(fcompanyName);
        await this.page.locator(this.password).fill(fpassword);
        await this.page.locator(this.confirmPassword).fill(conPassowrd);    
        //await this.page.locator(this.registrationButton).click();    
    }
}