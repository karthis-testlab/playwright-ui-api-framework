import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { WidgetsPage } from '../../pages/widgets-page';
import { ToolTipPage } from '../../pages/tool-tips-page';

let page: Page;
let homePage: HomePage;
let widgetsPage: WidgetsPage;
let toolTipPage: ToolTipPage;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://demoqa.com/');
    homePage = new HomePage(page);
    await homePage.clickWidgetsCard();

});

test.beforeEach(async () => {

    widgetsPage = new WidgetsPage(page);
    toolTipPage = new ToolTipPage(page);

});

test('TC05 - Verify the tooltip', async () => {

    await widgetsPage.clickToolTipMenu();
    await toolTipPage.hoverOnTheToolTipButton();
    await expect(toolTipPage.locateToolTipInfo()).toBeVisible();
    await expect(toolTipPage.locateToolTipInfo()).toHaveText('You hovered over the Button');

})