import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

export class ProgressBarPage {

    readonly page: Page;
    readonly progressBarStartButton: Locator;
    readonly progressBarStopButton: Locator;
    readonly progressBarResetButton: Locator;
    readonly progressBarComplete: Locator;
    readonly progressBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.progressBarStartButton = page.locator(repo.getProgressBarStartButton());
        this.progressBar = page.locator(repo.getProgressBarElement());
        this.progressBarStopButton = page.getByText(repo.getProgressBarStopText(), { exact: true });
        this.progressBarComplete = page.getByText(repo.getProgressBarCompleteText(), { exact: true });
        this.progressBarResetButton = page.getByText(repo.getProgressBarResetText(), { exact: true });
    }

    async clickStartButton() {
        await this.progressBarStartButton.click();
    }

    async clickStopButton() {
        await this.progressBarStopButton.click();
    }

    async clickResetButton() {
        await this.progressBarResetButton.click();
    }

    async getProgressBarCssColorValue() {
        const property = repo.getProgressBarCssValue();
        const color = await this.progressBar.evaluate((element, property) => {
            return window.getComputedStyle(element).getPropertyValue(property);
        }, property);
        return color;
    }

    locateProgressBar() {
        return this.progressBar;
    }

    locateProgressBarStartButton() {
        return this.progressBarStartButton;
    }

    locateProgressBarStopButton() {
        return this.progressBarStopButton;
    }

    locateProgressBarResetButton() {
        return this.progressBarResetButton;
    }

    locateProgressBarCompleteText() {
        return this.progressBarComplete;
    }

}

export default ProgressBarPage;