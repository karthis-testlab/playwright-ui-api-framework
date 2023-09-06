import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { InteractionsPage } from '../../pages/interactions-page';
import { DroppablePage } from '../../pages/droppable-page';

let page: Page;
let homePage: HomePage;
let interactionsPage: InteractionsPage;
let droppablePage: DroppablePage;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://demoqa.com/');
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