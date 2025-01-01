import { Location, LocationType, MapConfig } from '../types/map';

export const locations: Location[] = [
  {
    id: 'reykjavik',
    name: 'Reykjavik',
    type: LocationType.CITY,
    coordinates: [64.1466, -21.9426],
    description: "The world's northernmost capital city and Iceland's cultural heart.",
    imageUrl: '/locations/reykjavik.jpg',
  },
  {
    id: 'blue-lagoon',
    name: 'Blue Lagoon',
    type: LocationType.ACTIVITY,
    coordinates: [63.8804, -22.4495],
    description: 'Iconic geothermal spa in a lava field on the Reykjanes Peninsula.',
    imageUrl: '/locations/bluelagoon.jpg',
  },
  {
    id: 'gullfoss',
    name: 'Gullfoss',
    type: LocationType.NATURAL_WONDER,
    coordinates: [64.3271, -20.1199],
    description: "Magnificent double-cascade waterfall, one of Iceland's most iconic natural wonders.",
    imageUrl: '/locations/gullfoss.jpg',
  },
  {
    id: 'vatnajokull',
    name: 'Vatnajökull',
    type: LocationType.NATURAL_WONDER,
    coordinates: [64.4183, -16.2611],
    description: "Europe's largest glacier by volume, covering 8% of Iceland.",
    imageUrl: '/locations/vatnajokull.jpg',
  },
  {
    id: 'thingvellir',
    name: 'Thingvellir National Park',
    type: LocationType.LANDMARK,
    coordinates: [64.2559, -21.1299],
    description: "Historic site of the world's first parliament and a dramatic rift valley.",
    imageUrl: '/locations/thingvellir.jpg',
  }
];

export const defaultMapConfig: MapConfig = {
  center: [64.3271, -20.1199], // Making Gullfoss as the center
  zoom: 7,
  minZoom: 2,
  maxZoom: 18
}; 