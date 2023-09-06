import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

export class FormsPage {

    readonly page: Page;
    readonly practiceFormMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.practiceFormMenu = page.getByText(repo.getFormsPracticeFormMenuText(), { exact: true });
    }

    async clickPracticeFormMenu() {
        await this.practiceFormMenu.click();
    }

}

export default FormsPage;