import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import useGetLocation from "../../hooks/useGetLocation";
import { useNavigate } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";

const Map = ({ markerLocation }) => {
  const [mapCenter, setMapCenter] = useState([48.569, 2.35]);
  const [lat, lng] = useGetLocation();

  useEffect(() => {
    if (lat && lng) return setMapCenter([lat, lng]);
  }, [lat, lng]);

  return (
    <div className="w-full rounded-md relative z-10 ">
      <MapContainer
        className="h-40 sm:h-screen shadow-sm m-3 sm:m-0  "
        center={mapCenter}
        zoom={50}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <button className="absolute z-[1000] right-1 top-3">
          <BsFillBookmarkFill
            className="text-gray-400 hover:text-gray-600 duration-150"
            size={35}
          />
        </button>
        <ClickMap />
        <ChangeMap position={mapCenter} />
        {markerLocation?.map((hotel) => (
          <Marker key={hotel.id} position={[hotel?.latitude, hotel?.longitude]}>
            <Popup>{hotel.smart_location}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;

function ChangeMap({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function ClickMap() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) =>
      navigate(`/bookmarks/add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
