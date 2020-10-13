const axios = require("axios");

module.exports = class API{

    constructor(baseUrl, apiKey){
         this.baseUrl = baseUrl;
         this.apiKey = apiKey;
    }

    fetchNews(search){
        return axios.get(`${this.baseUrl}/q=${search}&api-key=${this.apiKey}`);
    }

}