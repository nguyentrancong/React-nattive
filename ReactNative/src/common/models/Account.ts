export enum AccountItemType {
  NORMAL = 'NORMAL',
  ACCOUNT = 'ACCOUNT',
}

export interface Account {
  id: number;
  title?: string;
  desc?: string;
  image?: number;
  itemType?: AccountItemType;
}
