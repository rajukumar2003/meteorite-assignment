import { Recommendation } from '@/types/recommendation';

export const recommendations: Recommendation[] = [
    {
    id: '1',
    title: 'Vatnajökull National Park',
    description: 'Europe\'s largest national park, featuring glaciers, waterfalls, and diverse wildlife.',
    image: '/locations/vatnajokull.jpg',
    category: 'Natural Wonder',
    rating: 4.7,
    location: {
      lat: 64.0111,
      lng: -16.8111,
    },
    tags: ['national park', 'glacier', 'wildlife'],
  },
  {
    id: '2',
    title: 'Reykjavik',
    description: 'Vibrant capital city with colorful buildings, rich culture, and modern cuisine.',
    image: '/locations/reykjavik.jpg',
    category: 'City',
    rating: 4.6,
    location: {
      lat: 64.1466,
      lng: -21.9426,
    },
    tags: ['capital', 'culture', 'nightlife'],
  },
  {
    id: '3',
    title: 'Northern Lights Tour',
    description: 'Guided aurora hunting experience in the Icelandic wilderness.',
    image: '/locations/northernlights.jpg',
    category: 'Activity',
    rating: 4.9,
    location: {
      lat: 64.9631,
      lng: -19.0208,
    },
    tags: ['aurora', 'tour', 'winter'],
    },
  {
    id: '4',
    title: 'Blue Lagoon',
    description: 'Iconic geothermal spa with milky-blue water, surrounded by black lava fields.',
    image: '/locations/bluelagoon.jpg',
    category: 'Natural Wonder',
    rating: 4.8,
    location: {
      lat: 63.8804,
      lng: -22.4495,
    },
    tags: ['spa', 'geothermal', 'wellness'],
  },
  {
    id: '5',
    title: 'Golden Circle',
    description: 'Popular day trip covering Þingvellir National Park, Geysir, and Gullfoss waterfall.',
    image: '/waterfall.jpg',
    category: 'Activity',
    rating: 4.5,
    location: {
      lat: 64.3153,
      lng: -20.3042,
    },
    tags: ['day trip', 'national park', 'waterfall'],
  },
]; 