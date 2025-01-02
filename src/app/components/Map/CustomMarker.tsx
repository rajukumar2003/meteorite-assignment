import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { Location } from '@/types/map';
import Image from 'next/image';

interface CustomMarkerProps {
  location: Location;
}

const getMarkerIcon = (imageUrl: string) => {
  return new Icon({
    iconUrl: imageUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    className: 'rounded-full border-2 border-white shadow-lg'
  });
};

const CustomMarker = ({ location }: CustomMarkerProps) => {
  return (
    <Marker 
      position={location.coordinates} 
      icon={getMarkerIcon(location.iconUrl || location.imageUrl)}
    >
      <Popup className="custom-popup">
        <div className="p-2 max-w-xs">
          <h3 className="font-bold text-lg mb-2">{location.name}</h3>
          <Image 
            src={location.imageUrl} 
            alt={location.name} 
            className=" object-cover rounded-lg mb-2"
            width={400}
            height={300}
          />
          <p className="text-sm mb-2">{location.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors w-full">
            Learn More
          </button>
        </div>
      </Popup>
    </Marker>
  );
};

export default CustomMarker; 