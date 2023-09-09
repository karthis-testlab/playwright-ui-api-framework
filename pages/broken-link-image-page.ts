import { type Locator, type Page, expect } from "@playwright/test";
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

    async findBrokenImageBySrcAttribute(locator? : Locator) {
        let statusCode: any;
        if(typeof locator !== 'undefined') {
            const imgSrc = locator.getAttribute("src");
            const response = await this.page.request.get(process.env.UI as string + imgSrc);
            statusCode = response.status();
            return statusCode;
        }
        const imgSrc = this.locateBrokenImageElement().getAttribute("src");
        const response = await this.page.request.get(process.env.UI as string + imgSrc);
        statusCode = response.status();
        return statusCode;        
    }

    async findBrokenImageByVisualComparison(locator: Locator) {
        let rBoolean: any = true;
        try {
            await expect(locator).toHaveScreenshot('broken-image.png');
        } catch (error) {
            rBoolean = false;
        }
        return rBoolean;
    }

    async findFirstBrokenImageInThePage() {
        let limit: number = 1;
        await this.page.waitForLoadState("domcontentloaded");
        const images =  this.page.locator("img");
        const allImages = await images.all();
        for await (const image of allImages) {
            if(await this.findBrokenImageBySrcAttribute(image) === 404 || await this.findBrokenImageByVisualComparison(image)) {
                console.log(await image.getAttribute("src") + " Image is broken in the current page.");
                break;
            }
        }
        return limit;
    }

}

export default BrokenLinkImagePage;