import axios from 'axios';

export default {
    getNews: async function(search){
        const result = await axios.get(`http://localhost:3001/api/search?q=${search}`);
        return result.data;
    }
}