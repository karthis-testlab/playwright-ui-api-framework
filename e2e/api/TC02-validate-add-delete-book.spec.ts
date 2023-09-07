import { test, expect } from '@playwright/test';
import { TestDataGenerator as data } from '../../utils/data-utils';
import { BaseMethodApi } from '../../base-api/base-http-methods';

let userName: string;
let password: string;
let uuid: string;
let basePath: string;
let httpMethod: BaseMethodApi;
let isbns: any;

test.beforeAll(async () => {
    userName = data.getUserName();
    password = data.getPassword();
    basePath = '/BookStore/v1/';
    httpMethod = new BaseMethodApi();
    uuid = await httpMethod.fetchUuid(userName, password);
});

test.beforeEach(async () => {
    isbns = await httpMethod.fetchListOfBooks(userName, password, 2);
})

test('Scenario 1a - User able to add a lists of books into book store', async () => {

    let collectionOfIsbns: any = [];

    for (let index = 0; index < isbns.length; index++) {
        collectionOfIsbns.push({
            "isbn": isbns[index]
        });
    }

    const data = {
        "userId": uuid,
        "collectionOfIsbns": collectionOfIsbns
    }

    const headers = {
        "Authorization": "Bearer " + await httpMethod.generateToken(userName, password)
    }

    const response = await httpMethod.postMethodWithHeader(basePath, 'Books', data, headers);

    expect(response.status()).toBe(201);
    expect(response.statusText()).toBe('Created');
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.books).toMatchObject(collectionOfIsbns);

});

test('Scenario 1b - Validate error response for the non existing isbn number', async () => {

    const data = {
        "userId": uuid,
        "collectionOfIsbns": [
            {
                "isbn": "978144932586"
            }
        ]
    }

    const headers = {
        "Authorization": "Bearer " + await httpMethod.generateToken(userName, password)
    }

    const response = await httpMethod.postMethodWithHeader(basePath, 'Books', data, headers);

    expect(response.status()).toBe(400);
    expect(response.statusText()).toBe('Bad Request');
    expect(response.ok()).not.toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.code).toBe("1205");
    expect(responseBody.message).toBe("ISBN supplied is not available in Books Collection!");

});