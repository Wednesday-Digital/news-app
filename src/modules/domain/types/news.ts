import { Moment } from 'moment';

interface News {
  id: string;
  webTitle: string;
  webUrl: string;
  webPublicationDate: Moment;
  sectionId: string;
  sectionName: string;
}

export { News };
