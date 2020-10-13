import React, {useEffect, useState} from 'react';
import NewsForm from "../components/NewsForm";
import NewsListItems from "../components/NewsListItems"
import API from '../utils/API';

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [news, setNews] = useState([]);
    const [pinnedNews, setPinnedNews] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
    //    getData()
        console.log(news)
    },[news])

    const getData = async ()=>{
        try{
            const result = await API.getNews(searchTerm) ;
            console.log(result);
            setNews(result.response.results);
        }
        catch(err){
            setError(err.message)
        }
    }
  return (
      <>
      {error&&<h1>{error}</h1>}
        <NewsForm
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            getData={getData}
        />
        <NewsListItems
            news={news}
            setNews={setNews}
        />
    </>
  );
}

export default Home;
