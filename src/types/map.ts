export interface Location {
  id: string;
  name: string;
  type: LocationType;
  coordinates: [number, number]; // [latitude, longitude]
  description: string;
  imageUrl: string;
  iconUrl?: string; 
}

export enum LocationType {
  CITY = 'city',
  NATURAL_WONDER = 'natural_wonder',
  ACTIVITY = 'activity',
  LANDMARK = 'landmark'
}


export interface MapConfig {
  center: [number, number];
  zoom: number;
  minZoom: number;
  maxZoom: number;
} 