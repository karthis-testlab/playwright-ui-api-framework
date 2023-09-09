import { test, expect, Page } from '@playwright/test';
import dotenv from 'dotenv';
import { HomePage } from '../../pages/home-page';
import { ElementsPage } from '../../pages/elements-page';
import { BrokenLinkImagePage } from '../../pages/broken-link-image-page';
import { BaseMethodApi } from '../../base-api/base-http-methods';

dotenv.config();

let page: Page;
let homePage: HomePage;
let elementsPage: ElementsPage;
let brokenLinkImagePage: BrokenLinkImagePage;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage(); 
});

test.beforeEach(async () => {
    await page.goto(process.env.UI as string);
    homePage = new HomePage(page);    
    await homePage.clickElementsCard();
    elementsPage = new ElementsPage(page);
    brokenLinkImagePage = new BrokenLinkImagePage(page);
});

test('TC02a - Verify broken image using visual comparison', async () => {
    await elementsPage.clickBrokenLinkImageMenu();
    await expect(brokenLinkImagePage.locateBrokenImageElement()).toHaveScreenshot('broken-image.png');
});

test('TC02b - Verify broken image using src attribute url', async () => {
    await elementsPage.clickBrokenLinkImageMenu();    
    expect(await brokenLinkImagePage.findBrokenImageBySrcAttribute()).toBe(404);
});