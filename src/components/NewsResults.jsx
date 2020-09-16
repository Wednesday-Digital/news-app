import React from "react";

import { NewsItem } from "../components/NewsItem";

const NewsResults = (props) => {
  const { news } = props;

  const renderNewsItem = (news) => {
    const newsComponents = [];

    for (const newsItem of news) {
      newsComponents.push(<NewsItem key={newsItem.id} newsItem={newsItem} />);
    }

    return newsComponents;
  };

  return (
    <div>
      <h2>Results</h2>
      {renderNewsItem(news)}
    </div>
  );
};

export { NewsResults };
