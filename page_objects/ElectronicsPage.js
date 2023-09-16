import { Expect, expect } from "@playwright/test";

exports.ElectronicPage = 

class ElectronicPage{

    constructor(page){
        this.page = page;

        this.cameraLabel = "//h1[normalize-space()='Camera & photo']";
        this.nikonD550 = "//a[normalize-space()='Nikon D5500 DSLR']";
        this.nikonD550img = "(//img[@title='Show details for Nikon D5500 DSLR'])[1]";
        this.rating = "//div[@title='0 review(s)']//div[@class='rating']";
        this.displayPrice = "//span[normalize-space()='From $630.00']";
        this.displayAddToCart = "(//button[@type='button'][normalize-space()='Add to cart'])[1]";
        this.displayCompareList = "(//button[@title='Add to compare list'][normalize-space()='Add to compare list'])[1]";
        this.displayWishList = "(//button[@title='Add to wishlist'][normalize-space()='Add to wishlist'])[1]";

        // Nikon D550
        this.nikonD550Label = "//h1[normalize-space()='Nikon D5500 DSLR']";
        this.shortDescription = "//div[@class='short-description']";
        this.emailToFrd = "//button[normalize-space()='Email a friend']";
        this.nikonImg = "//img[@id='main-product-img-13']";
    }

    async varifyLabel(){
        await expect(this.page.locator(this.cameraLabel)).toBeVisible();
    }

    async verifyNikonD(){
        await expect(this.page.locator(this.nikonD550)).toBeVisible();
    }

    async varifyImg(){
        await expect(this.page.locator(this.nikonD550img)).toBeVisible();
    }

    async verifyRating(){
        await expect(this.page.locator(this.rating)).toBeVisible();
    }

    async verifyDisplayPrice(){
        await expect(this.page.locator(this.displayPrice)).toBeVisible();
    }

    async varifyDisplayAddtoCart(){
        await expect(this.page.locator(this.displayAddToCart)).toBeVisible();
    }

    async verifyDisplayCompareList(){
        await expect(this.page.locator(this.displayCompareList)).toBeVisible();
    }

    async verifyDisplayWishList(){
        await expect(this.page.locator(this.displayWishList)).toBeVisible();
    }

    async clickNikonD550(){
        await this.page.locator(this.nikonD550).click();
    }

    async verifyNikonMailLabel(){
        await expect(this.page.locator(this.nikonD550Label)).toBeVisible();
    }

    async verifyShortDescription(){
        await expect(this.page.locator(this.shortDescription)).toBeVisible();
    }

    async verifyIntenalImg(){
        await expect(this.page.locator(this.nikonD550img)).toBeVisible();
    }

    async verifyFrdMail(){
        await expect(this.page.locator(this.emailToFrd)).toBeVisible();
    }
}