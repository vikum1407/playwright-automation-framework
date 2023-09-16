import {expect} from '@playwright/test'

exports.DeletePage = 

class DeletePage{

    constructor(page) {
        this.page = page;
        this.deleteBtn = "#button";
    }

    async deleteOperation(){
        await this.page.goto("caca");
        await this.page.locator(this.deleteBtn).click();
    }


}