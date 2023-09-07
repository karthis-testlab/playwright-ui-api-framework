import { request } from '@playwright/test';

export class BaseMethodApi {

    async postMethod(basePath: string, resource: string, body: any) {
        const context = await request.newContext();
        const reponse = await context.post(basePath + resource, {
            data: body
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

}

export default BaseMethodApi;