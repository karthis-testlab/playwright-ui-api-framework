import { request } from '@playwright/test';

export class BaseMethodApi {

    async postMethod(basePath: string, resource: string, body: any) {
        const context = await request.newContext();
        const reponse = await context.post(basePath + resource, {
            data: body
        });
        return reponse;
    }

    async postMethodWithHeader(basePath: string, resource: string, body: any, headers: any) {
        const context = await request.newContext();
        const reponse = await context.post(basePath + resource, {
            data: body,
            headers: headers
        });
        return reponse;
    }

    async getMethod(basePath: string, resource: string, headers: any) {
        const context = await request.newContext();
        const reponse = await context.get(basePath + resource, {
            headers: headers
        });
        return reponse;
    }

    async generateToken(userName: string, password: string) {
        const data = {
            "userName": userName,
            "password": password
        }
        const generateToken = await this.postMethod('/Account/v1', '/GenerateToken', data);
        const authorizationHeader = await generateToken.json();
        return authorizationHeader.token;
    }

    async fetchListOfBooks(userName: string, password: string, limit: number) {
        let isbns: any = [];
        const headers = {
            "Authorization": "Bearer "+await this.generateToken(userName, password)
        }
        const response = await this.getMethod('/BookStore/v1', '/Books', headers);
        const responseBody = await response.json();
        const books = responseBody.books;
        for(let index: number = 0;  index < limit; index++){
            isbns[index] = books[index].isbn;
        }
        return isbns;
    }

    async fetchUuid(userName: string, password: string) {
        const data = {
            "userName": userName,
            "password": password
        }    
        const response = await this.postMethod('/Account/v1', '/User', data);
        const responseBody = await response.json();
        return responseBody.userID;
    }

}

export default BaseMethodApi;