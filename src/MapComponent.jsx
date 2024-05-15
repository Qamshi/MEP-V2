import { Map, Marker } from 'pigeon-maps';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function MyMap({ insights }) {
  const [center, setCenter] = useState([30.3753, 69.3451]); // Coordinates for Pakistan (centered)
  const [zoom, setZoom] = useState(6); // Initial zoom level
  const [cityCoordinates, setCityCoordinates] = useState({});

  // Effect to fetch coordinates for cities on component mount
  

  useEffect(() => {
    const fetchCoordinates = async () => {
      const coordinates = {};
      if (insights) {
        for (const city of insights) {
          try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`);
            if (response.data && response.data.length > 0) {
              const { lat, lon } = response.data[0];
              coordinates[city] = [parseFloat(lat), parseFloat(lon)];
            }
          } catch (error) {
            console.error('Error fetching coordinates:', error);
          }
        }
      }
      setCityCoordinates(coordinates);
    };

    fetchCoordinates();
  }, [insights]);

  // Effect to log insights with a delay
  
  return (
    <Map
      height={500}
      center={center}
      zoom={zoom}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }}
    >
      {Object.entries(cityCoordinates).map(([city, coordinates], index) => (
        <Marker key={index} anchor={coordinates} payload={index + 2} onClick={({ event, anchor, payload }) => {}} />
      ))}
    </Map>
  );
}
