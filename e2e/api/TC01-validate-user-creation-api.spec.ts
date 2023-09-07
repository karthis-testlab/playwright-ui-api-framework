import { test, expect } from '@playwright/test';
import { TestDataGenerator as data } from '../../utils/data-utils';
import { BaseMethodApi } from '../../base-api/base-http-methods';

let userName: string;
let password: string;
let uuid: string;
let basePath: string;
let httpMethod: BaseMethodApi;

test.beforeAll(async () => {
    userName = data.getUserName();
    password = data.getPassword();
    basePath = '/Account/v1';
});

test.beforeEach(async () => {
    httpMethod = new BaseMethodApi();
});

test('Scenario 1 - Validate user creation for the valid input', async () => {

    const data = {
        "userName": userName,
        "password": password
    }

    const response = await httpMethod.postMethod(basePath, '/User', data);

    expect(response.status()).toBe(201);
    expect(response.statusText()).toBe('Created');
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.userID).not.toBeNull();
    expect(responseBody.username).toBe(userName);
    expect(responseBody.books).toStrictEqual([]);
    uuid = responseBody.userID;

});

test('Scenario 2 - Validate error response for the wrong password criteria', async () => {

    const data = {
        "userName": userName,
        "password": "password"
    }

    const response = await httpMethod.postMethod(basePath, '/User', data);

    expect(response.status()).toBe(400);
    expect(response.statusText()).toBe('Bad Request');
    expect(response.ok()).not.toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.code).toBe("1300");
    expect(responseBody.message).toBe("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");

});

test('Scenario 3 - Validate error reponse for the existing user name', async () => {

    const data = {
        "userName": userName,
        "password": password
    }

    const response = await httpMethod.postMethod(basePath, '/User', data);

    expect(response.status()).toBe(406);
    expect(response.statusText()).toBe('Not Acceptable');
    expect(response.ok()).not.toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.code).toBe("1204");
    expect(responseBody.message).toBe("User exists!");
    
});

test('Scenario 4 - Validate created user available in the database', async () => {

    const headers = {
        "Authorization": "Bearer "+await httpMethod.generateToken(userName, password)
    }

    const response = await httpMethod.getMethod(basePath, '/User/'+uuid, headers);

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.userId).toBe(uuid);
    expect(responseBody.username).toBe(userName);

});