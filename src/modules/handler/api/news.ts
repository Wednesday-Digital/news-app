import {
  RequestHandler as expressRequestHandler,
  Request as expressRequest,
  Response as expressResponse,
  NextFunction as expressNextFunction,
} from 'express';
import config from '../../../config/config';

import { RError } from '../../common/types/error';
import { Output } from '../../common/types/output';
import { GuardianNewsService } from '../../domain/services/news';
import { News } from '../../domain/types/news';
import { NewsService } from '../../domain/types/service';

const newsService: NewsService = new GuardianNewsService(
  config.guardianAPIURL,
  config.guardianAPIKey
);

const getManyNews: expressRequestHandler = async function getManyNews(
  request: expressRequest,
  response: expressResponse,
  nextFunc: expressNextFunction
) {
  try {
    const query = request?.query?.query as string;
    // console.log('query', query);

    const news: Output<News[]> = await newsService.getManyNews(query);
    response.send(news);
  } catch (error) {
    console.log('Failed geting many news');
    if (error instanceof RError === false) {
      error = new RError(error.message);
    }
    nextFunc(error);
  }
};

export { getManyNews };
