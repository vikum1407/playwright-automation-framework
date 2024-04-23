exports.CommonDropDowns = 

class CommonDropDowns{



    constructor(page){
        this.page = page;
    }

    async SelectDateDropDowns(element, value){
        await this.page.locator(element).selectOption(value);
    }

    async MultipleOptions(element, value){
        for (const ele of element){
            if (ele.textContent() === value){
                ele.click();
                break;
            }
        }
    }
}