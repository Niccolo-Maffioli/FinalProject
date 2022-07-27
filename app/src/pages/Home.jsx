//! Google Map 1

/*
 import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker, useJsApiLoader } from "@react-google-maps/api";

export default function Home() {
  const [locations, setLocations] = useState([]);

    useEffect(() => {
        const getLocations = async () => {
            const response = await fetch('http://localhost:1337/api/locations?populate=*');
            const {data} = await response.json();

            setLocations(data);
        };

        return getLocations;
    }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDdbxQCue4COfi6sPOd4RjziUpNo6_cY8Y",
  });

  return isLoaded ? <Map locations={locations} /> : <div>Loading...</div>;
}

const Map = ({ locations }) => {
  return (
    <div>
      <GoogleMap zoom={15} center={{ lat: 45.483855547861246, lng: 9.25037008657273 }} mapContainerClassName="map-container h-screen">
      
        {locations.map((location) => 
          <div
          key={location.id}>
            <Marker 
              position={{lat: location.attributes.latitude, lng: location.attributes.longitude}} 
              onLoad={marker => console.log('marker: ', marker)}
              mapContainerClassName="h-20 w-50"/>
          </div>
        ) }
      </GoogleMap>
    </div>
  );
} 
*/

//! Leaflet


/* import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <MapContainer
      center={[40.8054, -74.0241]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAPBOX_API_key}`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />
      <Marker position={[40.8054, -74.0241]} draggable={true} animate={true}>
        <Popup>Hey ! I live here</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map; */



//! Google Map 2

/* import { useMemo } from "react";
 import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

 export default function Home() {
   const { isLoaded } = useLoadScript({
     googleMapsApiKey: "AIzaSyDdbxQCue4COfi6sPOd4RjziUpNo6_cY8Y",
   });

   if (!isLoaded) return <div>Loading...</div>;
   return <Map />;
 }

 function Map() {
  const center = useMemo(() => ({ lat: 45.483855547861246, lng: 9.25037008657273 }), []);

   return (
     <GoogleMap zoom={15} center={center} mapContainerClassName="map-container h-screen">
       <Marker position={{lat: 45.483855547861246, lng: 9.25037008657273}}/>
     </GoogleMap>
   );
} */

//! Pigeon Map

import React, { useState } from 'react'
import { Map , Marker} from 'pigeon-maps'
import { stamenToner } from 'pigeon-maps/providers'
import Mapcard from '../components/Mapcard'

export default function Home() {
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 220}deg 30% 23%)`

  return (
    <Map
    provider={stamenToner}
    dprs={[1, 2]} // this provider supports HiDPI tiles
    height={800}
    defaultCenter={[45.483855547861246, 9.25037008657273]}
    defaultZoom={11}
    >
      <Marker 
      width={50} 
      anchor={[45.483855547861246, 9.25037008657273]} 
      onClick={() => setHue(hue + 20)}
      color={color} 
      />
      <Mapcard />
    </Map>
  )
}