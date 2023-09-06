import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

export class ToolTipPage {

    readonly page: Page;
    readonly toolTipButton: Locator;
    readonly toolTipInner: Locator;

    constructor(page: Page) {
        this.page = page;
        this.toolTipButton = page.locator(repo.getToolTipButton());
        this.toolTipInner = page.locator(repo.getToolTipInfo());
    }

    async hoverOnTheToolTipButton() {
        await this.toolTipButton.hover({ force: true });
    }

    locateToolTipInfo() {
        return this.toolTipInner;
    }

}

export default ToolTipPage;