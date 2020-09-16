import { DomainModel } from './news';
import { Output } from '../../common/types/output';

interface DomainRepository {
  selectOneDomainModel(id: string): Output<DomainModel>;
}

export { DomainRepository };
