import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

export class ElementsPage {

    readonly page: Page;
    readonly webTableMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.webTableMenu = page.getByText(repo.getElementsWebTableMenuText(), { exact: true });
    }

    async clickWebTableMenu() {
        await this.webTableMenu.click();
    }

}

export default ElementsPage;