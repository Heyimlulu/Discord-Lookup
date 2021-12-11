import axios from 'axios';

export default class DiscordService {
    static async getUser(id) {
        return await axios.get(`https://discord-lookup-api.herokuapp.com/api/user/profile?q=${id}`)
        .then((response) => response.data.user)
        .catch((error) => console.log(error));
    }
}
