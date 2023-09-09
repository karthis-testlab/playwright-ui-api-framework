import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

export class BrokenLinkImagePage {

    readonly page: Page;
    readonly brokenImageElement: Locator;

    constructor(page: Page) {
        this.page = page;
        this.brokenImageElement = page.locator(repo.getBrokenImageObject());
    }

    locateBrokenImageElement() {
        return this.brokenImageElement;
    }

    async findBrokenImageBySrcAttribute() {
        const imgSrc = this.locateBrokenImageElement().getAttribute("src");
        const response = await this.page.request.get(process.env.UI as string + imgSrc);
        return response.status();
    }

}

export default BrokenLinkImagePage;