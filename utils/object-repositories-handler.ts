import { home } from '../object-repositories/HomePage';
import { elements } from '../object-repositories/ElementsPage';
import { webtable } from '../object-repositories/WebTablePage';
import { brokenLinkImage } from '../object-repositories/BrokenLinkImagePage';
import { widgets } from '../object-repositories/WidgetsPage';
import { progressBar } from '../object-repositories/ProgressBarPage';
import { toolTip } from '../object-repositories/ToolTipPage';
import { interactions } from '../object-repositories/InteractionsPage';
import { dragDrop } from '../object-repositories/DroppablePage';
import { forms } from '../object-repositories/FormsPage';
import { practiceForm } from '../object-repositories/PracticeFormPage';

export function getHomeElementsCardText() {
    return home.card.elements;
}

export function getHomeFormCardText() {
    return home.card.form;
}

export function getHomeWidgetsCardText() {
    return home.card.widgets;
}

export function getHomeInteractionsCardText() {
    return home.card.interactions;
}

export function getElementsWebTableMenuText() {
    return elements.menu.webTables;
}

export function getElementsBrokenLinkImageText() {
    return elements.menu.brokenLinkImage;
}

export function getBrokenImageObject() {
    return brokenLinkImage.broken.image;
}

export function getWidgetsProgressBarMenuText() {
    return widgets.menu.progressBar;
}

export function getWidgetsToolTipText() {
    return widgets.menu.toolTip;
}

export function getTableFirstNameObject(rowNum: any) {    
    switch (rowNum) {
        case 1:
            return webtable.rows[1].firstName;            
        case 2:
            return webtable.rows[2].firstName;            
        case 3:
            return webtable.rows[3].firstName;
        case 4:
            return webtable.rows[4].firstName;
        default:
            return "";
    }    
}

export function getTableLastNameObject(rowNum: any) {    
    switch (rowNum) {
        case 1:
            return webtable.rows[1].lastName;            
        case 2:
            return webtable.rows[2].lastName;            
        case 3:
            return webtable.rows[3].lastName;
        case 4:
            return webtable.rows[4].lastName;
        default:
            return "";
    }    
}

export function getTableAgeObject(rowNum: any) {    
    switch (rowNum) {
        case 1:
            return webtable.rows[1].age;            
        case 2:
            return webtable.rows[2].age;            
        case 3:
            return webtable.rows[3].age;
        case 4:
            return webtable.rows[4].age;
        default:
            return "";
    }    
}

export function getTableEmailObject(rowNum: any) {    
    switch (rowNum) {
        case 1:
            return webtable.rows[1].email;            
        case 2:
            return webtable.rows[2].email;            
        case 3:
            return webtable.rows[3].email;
        case 4:
            return webtable.rows[4].email;
        default:
            return "";
    }    
}

export function getTableSalaryObject(rowNum: any) {    
    switch (rowNum) {
        case 1:
            return webtable.rows[1].salary;            
        case 2:
            return webtable.rows[2].salary;            
        case 3:
            return webtable.rows[3].salary;
        case 4:
            return webtable.rows[4].salary;
        default:
            return "";
    }    
}

export function getTableDepartmentObject(rowNum: any) {    
    switch (rowNum) {
        case 1:
            return webtable.rows[1].department;            
        case 2:
            return webtable.rows[2].department;            
        case 3:
            return webtable.rows[3].department;
        case 4:
            return webtable.rows[4].department;
        default:
            return "";
    }    
}

export function getFirstNameColumnObject() {
    return webtable.column.firstName;
}

export function getEditIconObject() {
    return webtable.rows.edit_record;
}

export function getAddButtonText() {
    return webtable.registration_form.add;
}

export function getSubmitButtonText() {
    return webtable.registration_form.submit;
}

export function getRegistrationFormFirstNameObject() {
    return webtable.registration_form.firstName;
}

export function getRegistrationFormLastNameObject() {
    return webtable.registration_form.lastName;
}

export function getRegistrationFormEmailObject() {
    return webtable.registration_form.email;
}

export function getRegistrationFormAgeObject() {
    return webtable.registration_form.age;
}

export function getRegistrationFormSalaryObject() {
    return webtable.registration_form.salary;
}

export function getRegistrationFormDepartmentObject() {
    return webtable.registration_form.department;
}

export function getProgressBarStartButton() {
    return progressBar.button.start;    
}

export function getProgressBarStopText() {
    return progressBar.button.stop;    
}

export function getProgressBarResetText() {
    return progressBar.button.reset;
}

export function getProgressBarCompleteText() {
    return progressBar.button.complete; 
}

export function getProgressBarElement() {
    return progressBar.elements.progress_bar;
}

export function getProgressBarCssValue() {
    return progressBar.cssValue.bgColor;
}

export function getToolTipButton() {
    return toolTip.button;
}

export function getToolTipInfo() {
    return toolTip.toolTipInfo;
}

export function getInteractionsDroppableMenuText() {
    return interactions.menu.droppable;
}

export function getDroppableHoverObject() {
    return dragDrop.droppable.hover;
}

export function getDraggableHoverObject() {
    return dragDrop.draggable.hover;
}

export function getDroppableTextObject() {
    return dragDrop.droppable.text;
}

export function getDroppableCssColorValue() {
    return dragDrop.droppable.cssColorValue;
}

export function getFormsPracticeFormMenuText() {
    return forms.menu.practiceForm;
}

export function getPracticeFormFirstNameObject() {
    return practiceForm.name.firstName;
}

export function getPracticeFormLastNameObject() {
    return practiceForm.name.lastName;
}

export function getPracticeFormEmailObject() {
    return practiceForm.email;
}

export function getPracticeFormMobileNumberObject() {
    return practiceForm.mobile_number;
}

export function getPracticeFormMaleGenderObject() {
    return practiceForm.gender.male;
}

export function getPracticeFormFemaleGenderObject() {
    return practiceForm.gender.female;
}

export function getPracticeFormOtherGenderObject() {
    return practiceForm.gender.other;
}

export function getPracticeFormDobInputFieldObject() {
    return practiceForm.dob.inputField;
}

export function getPracticeFormDobMonthObject() {
    return practiceForm.dob.month;
}

export function getPracticeFormDobYearObject() {
    return practiceForm.dob.year;
}

export function getPracticeFormSubjectObject() {
    return practiceForm.subject;
}

export function getPracticeFormSportsHobbyObject() {
    return practiceForm.hobbies.sports;
}

export function getPracticeFormReadingHobbyObject() {
    return practiceForm.hobbies.reading;
}

export function getPracticeFormMusicHobbyObject() {
    return practiceForm.hobbies.music;
}

export function getPracticeFormPictureUploadObject() {
    return practiceForm.picture_upload;
}

export function getPracticeFormCurrentAddressObject() {
    return practiceForm.current_address;
}

export function getPracticeFormStateFieldObject() {
    return practiceForm.state.stateField;
}

export function getPracticeFormStateInputObject() {
    return practiceForm.state.input;
}

export function getPracticeFormCityFieldOject() {
    return practiceForm.city.cityField;
}

export function getPracticeFormCityInputObject() {
    return practiceForm.city.input;
}

export function getPracticeFormSubmitButtonObject() {
    return practiceForm.submit;
}

export function getResultStudentName() {
    return practiceForm.result.studentName;
}

export function getResultStudentEmail(){
    return practiceForm.result.studentEmail;
}

export function getResultsGender() {
    return practiceForm.result.gender;
}

export function getResultsDob() {
    return practiceForm.result.dob;
}

export function getResultsMobile() {
    return practiceForm.result.mobile;
}

export function getResultsSubjects() {
    return practiceForm.result.subjects;
}

export function getResultsHobbies() {
    return practiceForm.result.hobbies;
}

export function getResultsPicture() {
    return practiceForm.result.picture;
}

export function getResultsAddress() {
    return practiceForm.result.address;
}

export function getResultsStateAndCity() {
    return practiceForm.result.stateCity;
}