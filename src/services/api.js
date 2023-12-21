import axios from 'axios';
import USER_FOUND from '../mocks/userFound-mock.json';
import USER_NOT_FOUND from '../mocks/userNotFound-mock.json';
import QUERY_ERROR from '../mocks/queryError-mock.json';
import LENGTH_ERROR from '../mocks/lengthError-mock.json';
import REGEX_ERROR from '../mocks/regexError-mock.json';

export default class Api {
    static BASE_URL = process.env.REACT_APP_API_URL;
    static IS_DEV = false;
    static MOCK = {
        USER_FOUND,
        USER_NOT_FOUND,
        QUERY_ERROR,
        LENGTH_ERROR,
        REGEX_ERROR,
    };

    static async getUserById(userId) {
        if (this.IS_DEV) {
            return new Promise((resolve) => {
                resolve(this.MOCK);
            });
        }

        const response = await axios.get(`${this.BASE_URL}/v1/user/lookup/${userId}`);

        if (!response.data.success) {
            return response.data;
        }    

        return response.data;
    }
}
