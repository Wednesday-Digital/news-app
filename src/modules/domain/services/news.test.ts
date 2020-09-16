import config from '../../../config/config';
import { InvalidGuardianServiceInputError } from '../../common/errors';
import { Output } from '../../common/types/output';
import { News } from '../types/news';
import { NewsService } from '../types/service';
import { GuardianNewsService } from './news';

const newsService: NewsService = new GuardianNewsService(
  config.guardianAPIURL,
  config.guardianAPIKey
);

describe('GIVEN `getManyNews` method in `GuardianNewsService` module', () => {
  describe('WHEN it is invoked with empty input', () => {
    it('THEN it should return invalid output', async () => {
      const expectedOutput: Output<News[]> = {
        data: null,
        error: InvalidGuardianServiceInputError,
      };
      expect(await newsService.getManyNews(undefined)).toEqual(expectedOutput);
      expect(await newsService.getManyNews(null)).toEqual(expectedOutput);
    });
  });
});
