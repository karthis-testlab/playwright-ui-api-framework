import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

export class WidgetsPage {

    readonly page: Page;
    readonly progressBarMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.progressBarMenu = page.getByText(repo.getWidgetsProgressBarMenuText(), { exact: true });
    }

    async clickProgressBarMenu() {
        await this.progressBarMenu.click();
    }

}

export default WidgetsPage;