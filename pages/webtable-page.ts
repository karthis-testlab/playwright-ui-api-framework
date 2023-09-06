import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

let index = 0;

export class WebTablePage {

    readonly page: Page;
    readonly addButton: Locator;
    readonly registrationFormFirstName: Locator;
    readonly registrationFormLastName: Locator;
    readonly registrationFormEmail: Locator;
    readonly registrationFormAge: Locator;
    readonly registrationFormSalary: Locator;
    readonly registrationFormDepartment: Locator;
    readonly registrationFormSubmitButton: Locator;
    readonly gridTableEditButton: Locator;
    readonly gridTableFirstNamesColumn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addButton = page.getByRole('button', { name: repo.getAddButtonText() });
        this.registrationFormFirstName = page.locator(repo.getRegistrationFormFirstNameObject());
        this.registrationFormLastName = page.locator(repo.getRegistrationFormLastNameObject());
        this.registrationFormEmail = page.locator(repo.getRegistrationFormEmailObject());
        this.registrationFormAge = page.locator(repo.getRegistrationFormAgeObject());
        this.registrationFormSalary = page.locator(repo.getRegistrationFormSalaryObject());
        this.registrationFormDepartment = page.locator(repo.getRegistrationFormDepartmentObject());
        this.registrationFormSubmitButton = page.getByRole('button', { name: repo.getSubmitButtonText() });
        this.gridTableFirstNamesColumn = page.locator(repo.getFirstNameColumnObject());
        this.gridTableEditButton = page.locator(repo.getEditIconObject());
    }

    async clickAddButton() {
        await this.addButton.click();
    }

    async enterFirstNameInRegistrationForm(firstName: string) {
        await this.registrationFormFirstName.type(firstName);
    }

    async clearAndEnterFirstNameInRegistrationForm(firstName: string) {
        await this.registrationFormFirstName.clear();
        await this.registrationFormFirstName.type(firstName);
    }

    async enterLastNameInRegistrationForm(lastName: string) {
        await this.registrationFormLastName.type(lastName);
    }

    async clearAndEnterLastNameInRegistrationForm(lastName: string) {
        await this.registrationFormLastName.clear();
        await this.registrationFormLastName.type(lastName);
    }

    async enterEmailInRegistrationForm(email: string) {
        await this.registrationFormEmail.type(email);
    }

    async enterAgeInRegistrationForm(age: string) {
        await this.registrationFormAge.type(age);
    }

    async enterSalaryInRegistrationForm(salary: string) {
        await this.registrationFormSalary.type(salary);
    }

    async enterDepartmentInRegistrationForm(department: string) {
        await this.registrationFormDepartment.type(department);
    }

    async clickSubmitButton() {
        await this.registrationFormSubmitButton.click();
    }

    async clickEditIconInGrid(index: number) {
        await this.gridTableEditButton.nth(index).click();
    }

    async editFirstNameAndLastName(givenFirstName: string, editFirstName: string, editLastName: string) {
        const firstNames = this.gridTableFirstNamesColumn;
        for await (const firstName of await firstNames.all()) {
            if (await firstName.textContent() === givenFirstName) {
                await this.clickEditIconInGrid(index);
                await this.clearAndEnterFirstNameInRegistrationForm(editFirstName);
                await this.clearAndEnterLastNameInRegistrationForm(editLastName);
                await this.clickSubmitButton();
                break;
            }
            index++;
        }
    }

    extractFristNameInGrid(rowNumber: number) {
        return this.page.locator(repo.getTableFirstNameObject(rowNumber));
    }

    extractEditedFirstNameInGrid() {
        return this.page.locator(repo.getTableFirstNameObject(index+1));
    }

    extractLastNameInGrid(rowNumber: number) {
        return this.page.locator(repo.getTableLastNameObject(rowNumber));
    }

    extractEditedLastNameInGrid() {
        return this.page.locator(repo.getTableLastNameObject(index+1));
    }

    extractAgeInGrid(rowNumber: number) {
        return this.page.locator(repo.getTableAgeObject(rowNumber));
    }

    extractEmailInGrid(rowNumber: number) {
        return this.page.locator(repo.getTableEmailObject(rowNumber));
    }

    extractSalaryInGrid(rowNumber: number) {
        return this.page.locator(repo.getTableSalaryObject(rowNumber));
    }

    extractDepartmentInGrid(rowNumber: number) {
        return this.page.locator(repo.getTableDepartmentObject(rowNumber));
    }

}

export default WebTablePage;