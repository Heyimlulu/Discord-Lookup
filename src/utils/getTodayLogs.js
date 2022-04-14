import axios from 'axios';

export const getTodayLogs = async () => {
    await axios.get('https://api.lookup.social/api/logs/today').then(response => {
        return response.data.count;
    }).catch(error => {
        console.error(error);
    });
}