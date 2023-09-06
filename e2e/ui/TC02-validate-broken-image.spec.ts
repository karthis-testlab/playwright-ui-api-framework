import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { ElementsPage } from '../../pages/elements-page';
import { BrokenLinkImagePage } from '../../pages/broken-link-image-page';

let page: Page;
let homePage: HomePage;
let elementsPage: ElementsPage;
let brokenLinkImagePage: BrokenLinkImagePage;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://demoqa.com/');
    homePage = new HomePage(page);    
    await homePage.clickElementsCard();

});

test.beforeEach(async () => {
    elementsPage = new ElementsPage(page);
    brokenLinkImagePage = new BrokenLinkImagePage(page);
});

test('TC02 - Verify broken image', async () => {
    await elementsPage.clickBrokenLinkImageMenu();
    await expect(brokenLinkImagePage.getBrokenImageElement()).toHaveScreenshot('broken-image.png');
});