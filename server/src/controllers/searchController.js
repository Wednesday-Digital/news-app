const config = require('../config');
const API = require('../services/API');

module.exports = {
  search: async function(req, res) {
    const api = new API(config.baseUrl, config.apiKey);
    console.log('search', req.query.q);
    try{
        const result = await api.fetchNews(req.query.q);
        console.log(result)
        return res.json(result) ; 
    }
    catch(err){
        console.log(err.message)
        return res.json(err)
    }
  },
};