import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

export class PracticeFormPage {

    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly maleGender: Locator;
    readonly mobileNumber: Locator;
    readonly dobInputField: Locator;
    readonly dobMonth: Locator;
    readonly dobYear: Locator;
    readonly subject: Locator;
    readonly readingHobby: Locator;
    readonly upload_picture: Locator;
    readonly currentAddress: Locator;
    readonly stateField: Locator;
    readonly stateInput: Locator;
    readonly cityField: Locator;
    readonly cityInput: Locator;
    readonly submitButton: Locator;
    readonly resultStudentName: Locator;
    readonly resultStudentEmail: Locator;
    readonly resultGender: Locator;
    readonly resultMobile: Locator;
    readonly resultDob: Locator;
    readonly resultSubjects: Locator;
    readonly resultHobbies: Locator;
    readonly resultPicture: Locator;
    readonly resultAddress: Locator;
    readonly resultStateCity: Locator;


    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator(repo.getPracticeFormFirstNameObject());
        this.lastName = page.locator(repo.getPracticeFormLastNameObject());
        this.email = page.locator(repo.getPracticeFormEmailObject());
        this.maleGender = page.locator(repo.getPracticeFormMaleGenderObject());
        this.mobileNumber = page.locator(repo.getPracticeFormMobileNumberObject());
        this.dobInputField = page.locator(repo.getPracticeFormDobInputFieldObject());
        this.dobMonth = page.locator(repo.getPracticeFormDobMonthObject());
        this.dobYear = page.locator(repo.getPracticeFormDobYearObject());
        this.subject = page.locator(repo.getPracticeFormSubjectObject());
        this.readingHobby = page.locator(repo.getPracticeFormReadingHobbyObject());
        this.upload_picture = page.locator(repo.getPracticeFormPictureUploadObject());
        this.currentAddress = page.locator(repo.getPracticeFormCurrentAddressObject());
        this.stateField = page.locator(repo.getPracticeFormStateFieldObject());
        this.stateInput = page.locator(repo.getPracticeFormStateInputObject());
        this.cityField = page.locator(repo.getPracticeFormCityFieldOject());
        this.cityInput = page.locator(repo.getPracticeFormCityInputObject());
        this.submitButton = page.locator(repo.getPracticeFormSubmitButtonObject());
        this.resultStudentName = page.locator(repo.getResultStudentName());
        this.resultStudentEmail = page.locator(repo.getResultStudentEmail());
        this.resultGender = page.locator(repo.getResultsGender());
        this.resultMobile = page.locator(repo.getResultsMobile());
        this.resultDob = page.locator(repo.getResultsDob());
        this.resultSubjects = page.locator(repo.getResultsSubjects());
        this.resultHobbies = page.locator(repo.getResultsHobbies());
        this.resultPicture = page.locator(repo.getResultsPicture());
        this.resultAddress = page.locator(repo.getResultsAddress());
        this.resultStateCity = page.locator(repo.getResultsStateAndCity());
    }

    async enterName(firstName: string, lastName: string) {
        await this.firstName.type(firstName);
        await this.lastName.type(lastName);
    }

    async enterEmail(email: string) {
        await this.email.type(email);
    }

    async selectMaleGender() {
        await this.maleGender.scrollIntoViewIfNeeded();
        await this.maleGender.click({ force: true });
    }

    async enterMobileNumber(mobileNumber: string) {
        await this.mobileNumber.type(mobileNumber);
    }

    async selectDateOfBirth(dob: String) {
        const dobArray = dob.split(" ");
        const monthYearArray = dobArray[1].split(",");
        await this.dobInputField.click();
        await this.dobMonth.selectOption(monthYearArray[0]);
        await this.dobYear.selectOption(monthYearArray[1]);
        await this.page.getByText(dobArray[0], { exact: true }).click();
    }

    async enterSubject(subject: string) {
        await this.subject.type(subject);
    }

    async clickReadingHobby() {
        await this.readingHobby.scrollIntoViewIfNeeded();
        await this.readingHobby.click({ force: true });
    }

    async uploadPicture(fileName: string) {
        await this.upload_picture.scrollIntoViewIfNeeded();
        await this.page.setInputFiles(repo.getPracticeFormPictureUploadObject(), 'upload/' + fileName);
    }

    async enterCurrentAddress(currentAddress: string) {
        await this.currentAddress.scrollIntoViewIfNeeded();
        await this.currentAddress.type(currentAddress);
    }

    async selectState(state: string) {        
        await this.stateField.scrollIntoViewIfNeeded();
        await this.stateField.click({ force: true });       
        await this.stateInput.nth(1).type(state); 
        await this.page.getByText(state, { exact: true }).nth(1).click({ force: true });              
    }

    async selectCity(city: string) {
        await this.cityField.scrollIntoViewIfNeeded();
        await this.cityField.click({ force: true });
        await this.cityInput.nth(1).type(city);
        await this.page.getByText(city, { exact: true }).nth(1).click({ force: true });        
    }

    async clickSubmitButton() {
        await this.submitButton.scrollIntoViewIfNeeded();
        await this.submitButton.click();
    }

    locateResultStudentName() {
        return this.resultStudentName;
    }

    locateResultStudentEmail() {
        return this.resultStudentEmail;
    }

    locateResultsGender() {
        return this.resultGender;
    }

    locateResultsMobile() {
        return this.resultMobile;
    }

    locateResultsDob() {
        return this.resultDob;
    }

    locateResultsSubjects() {
        return this.resultSubjects;
    }

    locateResultsHobbies() {
        return this.resultHobbies;
    }

    locateResultsPicture() {
        return this.resultPicture;
    }

    locateResultsAddress() {
        return this.resultAddress;
    }

    locateResultStateAndCity() {
        return this.resultStateCity;
    }

}

export default PracticeFormPage;