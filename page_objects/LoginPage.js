import {expect} from '@playwright/test'

exports.LoginPage = 

class LoginPage{

    constructor(page) {
        this.page = page;

        // Login Page Object Repositories
        this.signInLabel = "//h1[normalize-space()='Welcome, Please Sign In!']";
        this.newCustomerLabel = "//strong[normalize-space()='New Customer']";
        this.returningCustomerLabel = "//strong[normalize-space()='Returning Customer']";
        this.registrationButton = "//button[normalize-space()='Register']";
        this.username = "//input[@id='Email']";
        this.password = "//input[@id='Password']";
        this.loginButton = "//button[normalize-space()='Log in']";
        this.rememberMeBtn = "//label[@for='RememberMe']";
        this.forgotPW = "//a[normalize-space()='Forgot password?']";
        this.aboutLabel = "//h2[normalize-space()='About login / registration']";
    }

    async validateSignInLabel(){
        await expect(this.page.locator(this.signInLabel)).toBeVisible();
    }

    async validateNewCustomLabel(){
        await expect(this.page.locator(this.newCustomerLabel)).toBeVisible();
    }

    async validateReturnCusLabel(){
        await expect(this.page.locator(this.returningCustomerLabel)).toBeVisible();
    }

    async validateRemBtn(){
        await expect(this.page.locator(this.rememberMeBtn)).toBeVisible();
    }

    async validateForgotpw(){
        await expect(this.page.locator(this.forgotPW)).toBeVisible();
    }

    async validateAboutLabel(){
        await expect(this.page.locator(this.aboutLabel)).toBeVisible();
    }

    async login(us, pw){
        await this.page.locator(this.username).fill(us);
        await this.page.locator(this.password).fill(pw);
        await this.page.locator(this.loginButton).click();
    }
}