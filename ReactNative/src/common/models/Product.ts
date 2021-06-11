export interface Product {
  id: number;
  name?: string;
  desc?: Description;
  price?: Price;
  image?: string;
}

export enum PDescriptionType {
  WEB = 'PRODUCT_DESCRIPTION_WEB',
  TEXT = 'PRODUCT_DESCRIPTION_TEXT',
}

export interface Description {
  id: number;
  type?: PDescriptionType;
  content?: string;
}

export interface Price {
  price: number;
  discount: number;
}
