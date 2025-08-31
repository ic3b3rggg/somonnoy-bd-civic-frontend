import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder'; 


const Map = ({ center, zoom = 13 }) => {
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);

useEffect(() => {
  if (!mapRef.current || leafletMapRef.current) return;

  const map = L.map(mapRef.current).setView(center, zoom);
  leafletMapRef.current = map;

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // 💡 Add Geocoder Control
  L.Control.geocoder({
    defaultMarkGeocode: true
  }).addTo(map);
}, [center, zoom]);


  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default Map;
