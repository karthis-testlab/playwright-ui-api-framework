import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { ElementsPage } from '../../pages/elements-page';
import { WebTablePage } from '../../pages/webtable-page';

let page: Page;
let homePage: HomePage;
let elementsPage: ElementsPage;
let webTablePage: WebTablePage;

test.beforeAll(async ({browser}) => {

    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://demoqa.com/');
    homePage = new HomePage(page);
    elementsPage = new ElementsPage(page);
    await homePage.clickElementsCard();
    await elementsPage.clickWebTableMenu();

});

test.beforeEach(async () => {

    webTablePage = new WebTablePage(page);

});

test('@smoke Scenario A - Verify user can enter new data into the table', async () => {
    
    await webTablePage.clickAddButton();
    await webTablePage.enterFirstNameInRegistrationForm('Alden');
    await webTablePage.enterLastNameInRegistrationForm('Cantrell');
    await webTablePage.enterEmailInRegistrationForm('test@test.com');
    await webTablePage.enterAgeInRegistrationForm('30');
    await webTablePage.enterSalaryInRegistrationForm('12345');
    await webTablePage.enterDepartmentInRegistrationForm('QA');
    await webTablePage.clickSubmitButton();
    await expect(webTablePage.extractFristNameInGrid(4)).toHaveText('Alden');
    await expect(webTablePage.extractLastNameInGrid(4)).toHaveText('Cantrell');
    await expect(webTablePage.extractAgeInGrid(4)).toHaveText('30');
    await expect(webTablePage.extractEmailInGrid(4)).toHaveText('test@test.com');
    await expect(webTablePage.extractSalaryInGrid(4)).toHaveText('12345');
    await expect(webTablePage.extractDepartmentInGrid(4)).toHaveText('QA');

});

test('Scenario B - Verify user can edit the row in a table', async () => {
    
    await webTablePage.editFirstNameAndLastName("Alden", "Gerimedica", "BV");   
    await expect(webTablePage.extractEditedFirstNameInGrid()).toHaveText('Gerimedica');
    await expect(webTablePage.extractEditedLastNameInGrid()).toHaveText('BV');

});