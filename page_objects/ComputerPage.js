const { expect } = require("@playwright/test");
import { CommonDropDowns } from '../commonMethods/CommonMethods'

exports.ComputerPage = 

class ComputerPage{
    
    constructor(page){
        this.page = page;
        this.computerLabel = "//h1[normalize-space()='Computers']";
        this.comItemList = "//div[@class='category-grid sub-category-grid']//h2";
        this.computerList = "//ul[@class='top-menu notmobile']//a[normalize-space()='Computers']";
        this.desktopLink = "//ul[@class='top-menu notmobile']//a[normalize-space()='Desktops']";
        this.notbookLink = "//ul[@class='top-menu notmobile']//a[normalize-space()='Notebooks']";
        this.softwareLink = "//ul[@class='top-menu notmobile']//a[normalize-space()='Software']";

        this.BuildComputer = "//h2[@class='product-title']//a[normalize-space()='Build your own computer']";
        this.azusNotebook = "//a[normalize-space()='Asus N551JK-XO076H Laptop']";
        this.windowPro = "//a[normalize-space()='Windows 8 Pro']";

        // Desktop Section
        this.desktopItems = "//div[@class='item-grid']//h2";

        // Details varifications
        this.label = "div[class='product-name'] h1";
        this.productImg = "#main-product-img-1";
        this.hddGBcheckbox = "#product_attribute_3_7";
        this.oscheckbox = "#product_attribute_4_8";
        this.swcheckbox = "#product_attribute_5_10";
        this.price = "#price-value-1";
        this.addToCart = "#add-to-cart-button-1";
        this.whitelistBtn = "#add-to-wishlist-button-1";
        this.compareListBtn = ".button-2.add-to-compare-list-button";
        this.emailFrd = ".button-2.email-a-friend-button";

        // Notebooks verification
        this.shortDescription = "//div[@class='short-description']";
        this.informationBar = "a[id='open-estimate-shipping-popup-5'] span";
        this.azusImg = "#main-product-img-5";
        this.azusPrice = "#price-value-5";
        this.noteAddToCart = "#add-to-cart-button-5";
        this.noteWishlist = "#add-to-wishlist-button-5";
        this.noteCompareList = "div[class='compare-products'] button[type='button']";

        // Software verification
        this.softwareInfo = "a[id='open-estimate-shipping-popup-11'] span"
        this.windowsImg = "#main-product-img-11";
        this.softwarePrice = "#price-value-11";
        this.softAddToCart = "#add-to-cart-button-11";
        this.softWishlist = "#add-to-wishlist-button-11";

    }

    

    async computerLabelValidation(){
        await expect(this.page.locator(this.computerLabel)).toBeVisible();
    }

    async comItemListValidation(){
        await expect(this.page.locator(this.comItemList)).toBeVisible();
    }

    // async clickDesktopIcon(value){
    //     const list = await this.page.$$(this.desktopItems);

    //     const commonM = new CommonDropDowns();
    //     commonM.MultipleOptions(list, value);
    // }
    async clickBuildComputerIcon(){
        await this.page.locator(this.BuildComputer).click();
    }

    async clickAzusesIcon(){
        await this.page.locator(this.azusNotebook).click();
    }

    async clickWindowsProIcon(){
        await this.page.locator(this.windowPro).click();
    }

    async desktopOption(){
        const compueter = await this.page.locator(this.computerList);
        const desktop = await this.page.locator(this.desktopLink);

        await compueter.hover();
        await desktop.click();
    }

    async notebooksOption(){
        const compueter = await this.page.locator(this.computerList);
        const notebooks = await this.page.locator(this.notbookLink);

        await compueter.hover();
        await notebooks.click();
    }

    async softwareOption(){
        const compueter = await this.page.locator(this.computerList);
        const software = await this.page.locator(this.softwareLink);

        await compueter.hover();
        await software.click();
    }

    async labelValidation(){
        await expect(this.page.locator(this.label)).toBeVisible();
    }

    async productImgValidation(){
        await expect(this.page.locator(this.productImg)).toBeVisible();
    }

    async noteBooksImgValidation(){
        await expect(this.page.locator(this.azusImg)).toBeVisible();
    }

    async windowsImgValidation(){
        await expect(this.page.locator(this.windowsImg)).toBeVisible();
    }

    async hddValidation(){
        await this.page.locator(this.hddGBcheckbox).click();
        await expect(this.page.locator(this.hddGBcheckbox)).toBeChecked();
    }

    async osValidation(){
        await expect(this.page.locator(this.oscheckbox)).toBeChecked();
    }

    async swValidation(){
        await expect(this.page.locator(this.swcheckbox)).toBeChecked();
    }

    async priceValidation(){
        await expect(this.page.locator(this.price)).toBeVisible();
    }

    async azusPriceValidation(){
        await expect(this.page.locator(this.azusPrice)).toBeVisible();
    }

    async softPriceValidation(){
        await expect(this.page.locator(this.softwarePrice)).toBeVisible();
    }

    async addToCartValidation(){
        await expect(this.page.locator(this.addToCart)).toBeEnabled();
    }

    async noteAddToCartValidation(){
        await expect(this.page.locator(this.noteAddToCart)).toBeEnabled();
    }

    async softAddToCartValidation(){
        await expect(this.page.locator(this.softAddToCart)).toBeEnabled();
    }

    async whitelistBtnValidation(){
        await expect(this.page.locator(this.price)).toBeEnabled();
    }

    async noteWishBtnValidation(){
        await expect(this.page.locator(this.noteWishlist)).toBeEnabled();
    }

    async softWishBtnValidation(){
        await expect(this.page.locator(this.softWishlist)).toBeEnabled();
    }

    async compareListBtnValidation(){
        await expect(this.page.locator(this.compareListBtn)).toBeEnabled();
    }

    async noteCompareListBtnValidation(){
        await expect(this.page.locator(this.noteCompareList)).toBeEnabled();
    }

    async emailFrdValidation(){
        await expect(this.page.locator(this.emailFrd)).toBeEnabled();
    }

    async shortDescriptionValidation(){
        await expect(this.page.locator(this.shortDescription)).toBeVisible();
    }

    async informationBarValidation(){
        await expect(this.page.locator(this.informationBar)).toBeVisible();
    }

    async softwareInfoValidation(){
        await expect(this.page.locator(this.softwareInfo)).toBeVisible();
    }
}