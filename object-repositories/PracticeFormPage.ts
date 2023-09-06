export const practiceForm = {

    name: {
        firstName: "input#firstName",
        lastName: "input#lastName"
    },
    email: "input#userEmail",
    gender: {
        male: "input#gender-radio-1",
        female: "input#gender-radio-2",
        other: "input#gender-radio-3"
    },
    mobile_number: "input#userNumber",
    dob: {
        inputField: "input#dateOfBirthInput",
        month: "select.react-datepicker__month-select",
        year: "select.react-datepicker__year-select"
    },
    subject: "div#subjectsContainer",
    hobbies: {
        sports: "input#hobbies-checkbox-1",
        reading: "input#hobbies-checkbox-2",
        music: "input#hobbies-checkbox-3"
    },
    picture_upload: "input#uploadPicture",
    current_address: "textarea#currentAddress",
    state: {
        stateField: "div#state",
        input: "div#state > div" 
    },
    city: {
        cityField: "div#city",
        input: "div#city > div" 
    },
    submit: "button#submit",
    result: {
        studentName: "xpath=//table//tbody/tr/td[text()='Student Name']/following-sibling::td",
        studentEmail: "//table//tbody/tr/td[text()='Student Email']/following-sibling::td",
        gender: "//table//tbody/tr/td[text()='Gender']/following-sibling::td",
        mobile: "//table//tbody/tr/td[text()='Mobile']/following-sibling::td",
        dob: "//table//tbody/tr/td[text()='Date of Birth']/following-sibling::td",
        subjects: "//table//tbody/tr/td[text()='Subjects']/following-sibling::td",
        hobbies: "//table//tbody/tr/td[text()='Hobbies']/following-sibling::td",
        picture: "//table//tbody/tr/td[text()='Picture']/following-sibling::td",
        address: "//table//tbody/tr/td[text()='Address']/following-sibling::td",
        stateCity: "//table//tbody/tr/td[text()='State and City']/following-sibling::td"
    }

}