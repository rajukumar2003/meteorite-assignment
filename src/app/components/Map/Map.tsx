'use client';

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { locations, defaultMapConfig } from '@/data/locations';
import CustomMarker from '@/app/components/map/CustomMarker';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import('leaflet').then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="h-[400px] w-[90%] mx-auto bg-gray-100 animate-pulse rounded-lg" />;
  }

  return (
    <div className="w-[90%] h-[500px] mx-auto relative rounded-lg overflow-hidden shadow-lg z-10">
      <MapContainer
        center={defaultMapConfig.center}
        zoom={defaultMapConfig.zoom}
        className="w-full h-full"
        minZoom={defaultMapConfig.minZoom}
        maxZoom={defaultMapConfig.maxZoom}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {locations.map((location) => (
          <CustomMarker key={location.id} location={location} />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map; 