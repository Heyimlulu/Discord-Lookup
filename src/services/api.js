import discordUser from '../mocks/discordUser-mock.json';

export default class Api {
    static baseUrl = 'https://api.lookup.social/api/';
    static isDev = false;
    static datas = discordUser;

    static async getUser(userID) {
        if (this.isDev) {
            return new Promise((resolve) => {
                resolve(this.datas.data);
            });
        } 
        
        return await fetch(`${this.baseUrl}user/profile?q=${userID}`)
        .then((response) => response.json())
        .then((response) => {

            // On error
            if (!response.success) {
                return response;
            }

            // On success
            return response;

        })
        .catch((error) => {
            console.error(error);
        });
    }

    static async getTodayLogs() {
        return await fetch(`${this.baseUrl}logs/today`)
            .then((response) => response.json())
            .then((response) => {

                const data = response.data.count;

                return data;

            }).catch((error) => {
                console.error(error);
            });
    }

}