import axios from 'axios';

export const fetchUser = async (userID) => {
    await axios.get(`https://api.lookup.social/api/user/profile?q=${userID}`).then(response => {
        return response.data;
    }).catch(error => {
        console.error(error);
    });
}