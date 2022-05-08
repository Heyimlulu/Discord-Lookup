import axios from 'axios';
import userFound from '../mocks/userFound-mock.json';
import userNotFound from '../mocks/userNotFound-mock.json';

export default class Api {
    static BASE_URL = 'https://lookupsocial.herokuapp.com/api/';
    static IS_DEV = false;
    static MOCK = userFound || userNotFound;

    static async getUser(userID) {
        if (this.IS_DEV) {
            return new Promise((resolve) => {
                resolve(this.MOCK);
            });
        }

        return await axios.get(`${this.BASE_URL}user/profile?q=${userID}`).then((response) => {
            if (!response.data.success) {
                return response.data.data;
            }

            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }

    static async getTodayLogs() {
        return await axios.get(`${this.BASE_URL}logs/today`).then((response) => {
            return response.data.data.count;
        }).catch((error) => {
            console.log(error);
        });
    }

}
