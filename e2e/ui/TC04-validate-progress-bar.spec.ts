import { test, expect, Page } from '@playwright/test';
import dotenv from 'dotenv';
import { HomePage } from '../../pages/home-page';
import { WidgetsPage } from '../../pages/widgets-page';
import { ProgressBarPage } from '../../pages/progress-bar-page';

dotenv.config();

let page: Page;
let homePage: HomePage;
let widgetsPage: WidgetsPage;
let progressBarPage: ProgressBarPage;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(process.env.UI as string);
    homePage = new HomePage(page);
    await homePage.clickWidgetsCard();

});

test.beforeEach(async () => {
    widgetsPage = new WidgetsPage(page);
    progressBarPage = new ProgressBarPage(page);
});

test('TC04 - Verify the progress bar', async () => {
    await widgetsPage.clickProgressBarMenu();
    await expect(progressBarPage.locateProgressBar()).toHaveText('0%');
    await progressBarPage.clickStartButton();
    await expect(progressBarPage.locateProgressBarStopButton()).toBeVisible();
    await expect(progressBarPage.locateProgressBarCompleteText()).toBeVisible();
    await expect(progressBarPage.locateProgressBarResetButton()).toBeVisible();    
    expect(await progressBarPage.getProgressBarCssColorValue()).toBe('rgb(40, 167, 69)');
});