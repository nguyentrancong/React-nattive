import {Product} from './Product';

export enum OrderSize {
  S = 'SIZE_SMALL',
  M = 'SIZE_MEDIUM',
  L = 'SIZE_LARGE',
}

export enum OrderType {
  DRINK = 'DRINK',
}
export interface Order {
  id: number;
  product: Product;
  amount: number;
  notes: string | undefined;
  type: OrderSize | undefined;
  OrderType: OrderType | undefined;
}
