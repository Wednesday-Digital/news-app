import axios from "axios";
import React from "react";

import { NewsQueryInput } from "../components/NewsQueryInput";
import { NewsResults } from "../components/NewsResults";

class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    this.callTheAPI();
  }

  callTheAPI = (query) => {
    axios
      .get(`http://localhost:9000/api/v1/news?query=${query}`)
      .then((response) => {
        if (response && response.data && response.data.data) {
          const news = response.data.data;
          console.log("news", news);
          this.setState({
            news,
          });
        }
      });
  };

  render() {
    const { news } = this.state;

    return (
      <div>
        <div>
          <NewsQueryInput callTheAPIFunc={this.callTheAPI} />
        </div>
        <div>
          <NewsResults news={news} />
        </div>
      </div>
    );
  }
}

export { NewsPage };
