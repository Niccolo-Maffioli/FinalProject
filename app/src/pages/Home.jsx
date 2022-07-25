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


// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export default function Home() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyDdbxQCue4COfi6sPOd4RjziUpNo6_cY8Y",
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map />;
// }

// function Map() {
//   const center = useMemo(() => ({ lat: 45.483855547861246, lng: 9.25037008657273 }), []);

//   return (
//     <GoogleMap zoom={15} center={center} mapContainerClassName="map-container h-screen">
//       <Marker position={{lat: 45.483855547861246, lng: 9.25037008657273}}/>
//     </GoogleMap>
//   );
// }