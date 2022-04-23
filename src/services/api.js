import axios from 'axios';
import userFound from '../mocks/userFound-mock.json';
// import userNotFound from '../mocks/userNotFound-mock.json';
import { environement } from './environement';

export default class Api {
    static baseUrl = 'https://api.lookup.social/api/';
    static isDev = environement.isDev;
    static datas = userFound;

    static async getUser(userID) {
        if (this.isDev) {
            return new Promise((resolve) => {
                resolve(this.datas);
            });
        } 
        
        return await axios.get(`${this.baseUrl}user/profile?q=${userID}`).then((response) => {
            if (!response.data.success) {
                return response.data.data;
            }

            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }

    static async getTodayLogs() {
        return await axios.get(`${this.baseUrl}logs/today`).then((response) => {
            return response.data.data.count;
        }).catch((error) => {
            console.log(error);
        });
    }

}