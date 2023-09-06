import { test, expect, Page } from '@playwright/test';
import dotenv from 'dotenv';
import { HomePage } from '../../pages/home-page';
import { FormsPage } from '../../pages/forms-page';
import { PracticeFormPage } from '../../pages/practice-form-page';

dotenv.config();

let page: Page;
let homePage: HomePage;
let formsPage: FormsPage;
let practiceFormPage: PracticeFormPage;
let firstName: string;
let lastName: string;
let email: string;
let gender: string;
let dob:  string;
let mobile: string;
let hobbies: string;
let subjects: string;
let picture: string;
let address: string;
let state: string;
let city: string;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    await context.route("**/*", (request) => {
        request.request().url().startsWith("https://googleads.g.doubleclick.net/")
            ? request.abort()
            : request.continue();
        return;
    });
    page = await context.newPage();
    await page.goto(process.env.UI as string);
    homePage = new HomePage(page);
    await homePage.clickFormCard();

});

test.beforeEach(async () => {

    formsPage = new FormsPage(page);
    practiceFormPage = new PracticeFormPage(page);

    firstName = "Gerimedica";
    lastName = "BV";
    email = "test@test.com";
    gender = "Male";
    mobile = "0123456789";
    dob = "15 January,1990";
    subjects = "Playwright Assignment";
    hobbies = "Reading";
    picture = "apple.jpg"
    address = "Netherlands"
    state = "NCR"
    city = "Delhi"

});

test.use({
    viewport: { width: 400, height: 660 },
});

test('@smoke TC03 - Verify user can submit the form', async () => {

    await formsPage.clickPracticeFormMenu();
    await practiceFormPage.enterName(firstName, lastName);
    await practiceFormPage.enterEmail(email);
    await practiceFormPage.selectMaleGender();
    await practiceFormPage.enterMobileNumber(mobile);
    await practiceFormPage.selectDateOfBirth(dob);
    await practiceFormPage.enterSubject(subjects);
    await practiceFormPage.clickReadingHobby();
    await practiceFormPage.uploadPicture(picture);
    await practiceFormPage.enterCurrentAddress(address);
    await practiceFormPage.selectState(state);
    await practiceFormPage.selectCity(city);
    await practiceFormPage.clickSubmitButton();

    await expect(practiceFormPage.locateResultStudentName()).toHaveText(firstName+" "+lastName);
    await expect(practiceFormPage.locateResultStudentEmail()).toHaveText(email);
    await expect(practiceFormPage.locateResultsGender()).toHaveText(gender);
    await expect(practiceFormPage.locateResultsMobile()).toHaveText(mobile);
    await expect(practiceFormPage.locateResultsDob()).toHaveText(dob);
    await expect(practiceFormPage.locateResultsSubjects()).toBeEmpty();
    await expect(practiceFormPage.locateResultsHobbies()).toHaveText(hobbies);
    await expect(practiceFormPage.locateResultsPicture()).toHaveText(picture);
    await expect(practiceFormPage.locateResultsAddress()).toHaveText(address);
    await expect(practiceFormPage.locateResultStateAndCity()).toHaveText(state+" "+city);

});