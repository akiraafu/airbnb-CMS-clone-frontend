import React from "react";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MyMap = (location) => {
  return (
    <div style={{ height: "450px", width: "100%" }}>
      <Map
        style={{ height: "100%" }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_mapBoxAPI}
        initialViewState={{
          longitude: location.value.lng,
          latitude: location.value.lat,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker
          longitude={location.value.lng}
          latitude={location.value.lat}
          anchor="bottom"
        ></Marker>
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
    </div>
  );
};
export default MyMap;
