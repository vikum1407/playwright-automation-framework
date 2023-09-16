import {expect} from '@playwright/test'

exports.HomePage = 

class HomePage{

    constructor(page){
        this.page = page;

        // Home Page Object Repositories
        this.logo = "img[alt='nopCommerce demo store']";
        this.registerBtn = "//a[@class='ico-register']";
        this.loginBtn = "//a[@class='ico-login']";
        this.whiteListBtn = "//span[@class='wishlist-label']";
        this.shoppingCart = "//span[@class='cart-label']";
        this.searchBtn = "//button[normalize-space()='Search']";

        this.electronicPage = "//ul[@class='top-menu notmobile']//a[normalize-space()='Electronics']";
        this.camaeraAndPhoto = "//ul[@class='top-menu notmobile']//a[normalize-space()='Camera & photo']";
    }

    async gotoHomePage(){
        await this.page.goto('https://demo.nopcommerce.com/');
    }

    async logoutHomePage(){
        await this.page.close();
    }

    async validateLogo(){
        await expect(this.page.locator(this.logo)).toBeVisible();
    }

    async validateRegBtn(){
        await expect(this.page.locator(this.registerBtn)).toBeVisible();
    }

    async validateLoginBtn(){
        await expect(this.page.locator(this.loginBtn)).toBeVisible();
    }

    async validateWhiteListBtn(){
        await expect(this.page.locator(this.whiteListBtn)).toBeVisible();
    }

    async validateShoppingCart(){
        await expect(this.page.locator(this.shoppingCart)).toBeVisible();
    }

    async validateSearchBtn(){
        await expect(this.page.locator(this.searchBtn)).toBeVisible();
    }

    async clickRegistrationBtn(){
        await this.page.locator(this.registerBtn).click();
    }

    async clickLoginBtn(){
        await this.page.locator(this.loginBtn).click();
    }

    async clickCameraPhotoPage(){
        await this.page.locator(this.electronicPage).hover();
        await this.page.locator(this.camaeraAndPhoto).click();
    }
}