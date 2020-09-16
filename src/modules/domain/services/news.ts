import axios, { AxiosRequestConfig } from 'axios';
import { isEmpty } from 'lodash';

import config from '../../../config/config';
import { InvalidGuardianServiceInputError } from '../../common/errors';
import { RError } from '../../common/types/error';
import { Output } from '../../common/types/output';
import { News } from '../types/news';
import { NewsService } from '../types/service';

class GuardianNewsService implements NewsService {
  _baseURL: string;
  _apiKey: string;

  constructor(baseURL: string, apiKey: string) {
    this._baseURL = baseURL;
    this._apiKey = apiKey;
  }

  async getManyNews(query: string): Promise<Output<News[]>> {
    const output: Output<News[]> = {
      data: null,
    };

    // TODO: Input check

    // TODO: Create its own function so that it's testable
    const finalURL = `${this._baseURL}/search?api-key=${this._apiKey}&q=${query}`;

    // TODO: Call Guardian API
    const axiosConfig: AxiosRequestConfig = { url: finalURL, method: 'get' };
    const axiosResponse = await axios.request(axiosConfig);

    try {
      // TODO: Validate response

      // TODO: Create Guardian Response Interface
      const news: News[] = axiosResponse?.data?.response?.results;
      // console.log('news', news);

      // TODO: Create its own function (Mapper / Adapter) so that it's testable
      const cleanedNews: News[] = news.map((newsItem: News) => {
        return {
          id: newsItem.id,
          webTitle: newsItem.webTitle,
          webUrl: newsItem.webUrl,
          // TODO: convert this to Moment
          webPublicationDate: newsItem.webPublicationDate,
          sectionId: newsItem.sectionId,
          sectionName: newsItem.sectionName,
        } as News;
      });

      output.data = cleanedNews;
    } catch (error) {
      output.error = new RError('Failed descting response form Guardian API');
    }

    return output;
  }
}

export { GuardianNewsService };
