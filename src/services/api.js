export default class Api {
    static baseUrl = 'https://api.lookup.social/api/';

    static async getUser(userID) {
        return await fetch(`${this.baseUrl}user/profile?q=${userID}`)
            .then((response) => response.json())
            .then((response) => {

                const data = response.data;

                // On error
                if (!response.success) {
                    return data;
                }

                // On success
                return data;

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