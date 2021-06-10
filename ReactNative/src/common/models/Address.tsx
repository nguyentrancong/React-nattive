export enum AddressType {
  HEADER = 'HEADER',
  ROW = 'ROW',
}

export interface Coordinate {
  longitude?: number;
  latitude?: number;
}

export interface Location {
  id: number;
  coordinate?: Coordinate;
  district?: string;
  street?: string;
  address?: string;
  city?: string;
}

export interface Address {
  id: number;
  type?: AddressType;
  title?: string;
  desc?: string;
  image?: string;
  distance?: number;
  location?: Location;
}
