import { faker } from '@faker-js/faker';

export class TestDataGenerator {

    public static getUserName() {
        return faker.internet.userName();
    }

    public static getPassword() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result + "@2";
    }

}