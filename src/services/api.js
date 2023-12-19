import axios from 'axios';
import userFound from '../mocks/userFound-mock.json';
// import userNotFound from '../mocks/userNotFound-mock.json';
// import queryError from '../mocks/queryError-mock.json';
// import lengthError from '../mocks/lengthError-mock.json';
// import regexError from '../mocks/regexError-mock.json';

export default class Api {
    static BASE_URL = process.env.REACT_APP_API_URL;
    static IS_DEV = false;
    static MOCK = userFound;

    static async getUser(userId) {
        if (this.IS_DEV) {
            return new Promise((resolve) => {
                resolve(this.MOCK);
            });
        }

        try {
            const response = await axios.get(`${this.BASE_URL}/v1/user/lookup/${userId}`);

            if (!response.data.success) {
                return response.data;
            }
    
            return response.data;
        } catch(error) {
            console.error("error: ", error);
            return error;
        }
    }
}
