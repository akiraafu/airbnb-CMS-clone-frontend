import React from "react";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const DashboardMap = ({ properties }) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Map
        style={{ height: "105%", width: "100%" }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_mapBoxAPI}
        initialViewState={{
          longitude: properties[0].location?.lng,
          latitude: properties[0].location?.lat,
          zoom: 6,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {properties.map((property) => (
          <Marker
            key={property}
            longitude={property?.location?.lng}
            latitude={property?.location?.lat}
            anchor="bottom"
          ></Marker>
        ))}

        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
    </div>
  );
};
export default DashboardMap;
