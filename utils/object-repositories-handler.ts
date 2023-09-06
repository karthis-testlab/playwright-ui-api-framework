import { home } from '../object-repositories/HomePage';
import { elements } from '../object-repositories/ElementsPage';
import { webtable } from '../object-repositories/WebTablePage';

export function getHomeElementsCardText() {
    return home.card.elements;
}

export function getElementsWebTableMenuText() {
    return elements.menu.webTables;
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
