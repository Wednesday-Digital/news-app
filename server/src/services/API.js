const axios = require("axios");

module.exports = class API{

    constructor(baseUrl, apiKey){
         this.baseUrl = baseUrl;
         this.apiKey = apiKey;
    }

    async fetchNews(search){
        const query = `${this.baseUrl}?q=${search}&api-key=${this.apiKey}`;
        const result = await axios.get(query);
        return result.data;
    }

}