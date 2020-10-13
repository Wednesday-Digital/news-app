import React, {useEffect, useState} from 'react';
import NewsForm from "../components/NewsForm";
import NewsListItems from "../components/NewsListItems"
import PinnedNews from "../components/PinnedNews"
import API from '../utils/API';

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [news, setNews] = useState([]);
    const [pinnedNews, setPinnedNews] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
    //    getData()
        console.log(pinnedNews)
    },[pinnedNews])

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

    const saveNotes = (news)=>{
        setPinnedNews([...pinnedNews, news])
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
            saveNotes={saveNotes}
        />
        <PinnedNews
            pinnedNews={pinnedNews}
        />
    </>
  );
}

export default Home;
