import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useGetLocation from "../../hooks/useGetLocation";
import { useHotel } from "../../contexts/HotelProvider/HotelProvider";

const MobileMap = () => {
  const { currentHotel } = useHotel();

  const [mapCenter, setMapCenter] = useState([32.4279, 53.688]);
  const [lat, lng] = useGetLocation();

  useEffect(() => {
    if (lat && lng) return setMapCenter([lat, lng]);
  }, [lat, lng]);

  return (
    <div className="w-full bg-slate-200">
      <div className="rounded-lg relative z-10 h-screen">
        <MapContainer
          className="h-screen bg-blue-300 "
          center={mapCenter}
          zoom={5}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[currentHotel.latitude, currentHotel.longitude]}>
            <Popup>{currentHotel.smart_location}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MobileMap;
