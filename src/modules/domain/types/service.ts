import { DomainModel } from './domain-model';
import { News } from './news';
import { Output } from '../../common/types/output';

interface DomainService {
  getOneDomainModel(id: string): Output<DomainModel>;
}

interface NewsService {
  getManyNews(query: string): Promise<Output<News[]>>;
}

export { DomainService, NewsService };
