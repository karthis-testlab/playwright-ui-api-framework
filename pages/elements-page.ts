import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

export class ElementsPage {

    readonly page: Page;
    readonly webTableMenu: Locator;
    readonly brokenLinkImage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.webTableMenu = page.getByText(repo.getElementsWebTableMenuText(), { exact: true });
        this.brokenLinkImage = page.getByText(repo.getElementsBrokenLinkImageText(), { exact: true });
    }

    async clickWebTableMenu() {
        await this.webTableMenu.click();
    }

    async clickBrokenLinkImageMenu() {
        await this.brokenLinkImage.click();
    }

}

export default ElementsPage;