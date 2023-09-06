import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

export class HomePage {

    readonly page: Page;
    readonly elementsCard: Locator;
    readonly formCard: Locator;
    readonly widgetsCard: Locator;
    readonly interactionsCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementsCard = page.getByText(repo.getHomeElementsCardText(), { exact: true });
        this.formCard = page.getByText(repo.getHomeFormCardText(), { exact: true });
        this.widgetsCard = page.getByText(repo.getHomeWidgetsCardText(), { exact: true });
        this.interactionsCard= page.getByText(repo.getHomeInteractionsCardText(), { exact: true });
    }

    async clickElementsCard() {
        await this.elementsCard.scrollIntoViewIfNeeded();
        await this.elementsCard.click();
    }

    async clickFormCard() {
        await this.formCard.scrollIntoViewIfNeeded();
        await this.formCard.click();
    }

    async clickWidgetsCard() {
        await this.widgetsCard.scrollIntoViewIfNeeded();
        await this.widgetsCard.click();
    }

    async clickInteractionCard() {
        await this.interactionsCard.scrollIntoViewIfNeeded();
        await this.interactionsCard.click();
    }

}

export default HomePage;