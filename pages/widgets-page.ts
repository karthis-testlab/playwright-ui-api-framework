import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

export class WidgetsPage {

    readonly page: Page;
    readonly progressBarMenu: Locator;
    readonly toolTipMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.progressBarMenu = page.getByText(repo.getWidgetsProgressBarMenuText(), { exact: true });
        this.toolTipMenu = page.getByText(repo.getWidgetsToolTipText(), { exact: true });
    }

    async clickProgressBarMenu() {
        await this.progressBarMenu.click();
    }

    async clickToolTipMenu() {
        await this.toolTipMenu.click();
    }

}

export default WidgetsPage;