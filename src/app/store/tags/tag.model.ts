import { Tag } from 'src/app/interfaces/tag/tag';

export class TagStateModel {
  error?: any = {};
  message?: any = {};
  tags: Tag[] = [];

  tagActivo: any = {};
  tagsCargados: boolean = false;
}