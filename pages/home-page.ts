import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

export class HomePage {

    readonly page: Page;
    readonly elementsCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementsCard = page.getByText(repo.getHomeElementsCardText(), { exact: true });
    }

    async clickElementsCard() {
        await this.elementsCard.scrollIntoViewIfNeeded();
        await this.elementsCard.click();
    }

}

export default HomePage;