import moment from "moment";
import React from "react";

const NewsItem = (props) => {
  const { newsItem } = props;
  let dateTimeText = newsItem.webPublicationDate;

  try {
    dateTimeText = moment(newsItem.webPublicationDate).format("DD/MM/YYYY");
  } catch (error) {
    console.error("Failed converting datetime");
  }

  return (
    <div style={{ margin: "1em" }}>
      {newsItem.id}
      {newsItem.webTitle}
      {newsItem.webUrl}
      {dateTimeText}
    </div>
  );
};

export { NewsItem };
