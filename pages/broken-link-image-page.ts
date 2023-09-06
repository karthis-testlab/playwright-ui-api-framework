import { type Locator, type Page } from "@playwright/test";

export class BrokenLinkImagePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getBrokenImageElement() {
        return this.page.locator("xpath=//p[text()='Broken image']/following-sibling::img");
    }

}

export default BrokenLinkImagePage;