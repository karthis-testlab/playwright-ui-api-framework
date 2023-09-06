import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

export class InteractionsPage {

    readonly page: Page;
    readonly droppableMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.droppableMenu = page.getByText(repo.getInteractionsDroppableMenuText(), { exact: true });
    }

    async clickDroppableMenu() {
        await this.droppableMenu.click();
    }

}

export default InteractionsPage;