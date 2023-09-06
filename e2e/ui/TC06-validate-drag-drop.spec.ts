import { test, expect, Page } from '@playwright/test';
import dotenv from 'dotenv';
import { HomePage } from '../../pages/home-page';
import { InteractionsPage } from '../../pages/interactions-page';
import { DroppablePage } from '../../pages/droppable-page';

dotenv.config();

let page: Page;
let homePage: HomePage;
let interactionsPage: InteractionsPage;
let droppablePage: DroppablePage;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(process.env.UI as string);
    homePage = new HomePage(page);
    await homePage.clickInteractionCard();

});

test.beforeEach(async () => {

    interactionsPage = new InteractionsPage(page);
    droppablePage = new DroppablePage(page);

});

test('TC06 - Verify user can drag and drop', async () => {

    await interactionsPage.clickDroppableMenu();
    await expect(droppablePage.locateDroppableMessage()).toHaveText("Drop here");
    await droppablePage.dragAndDropAction();
    await expect(droppablePage.locateDroppableMessage()).toHaveText("Dropped!");

})