import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

export default function Locations() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const getLocations = async () => {
            const response = await fetch('http://localhost:1337/api/locations?populate=*');
            const {data} = await response.json();

            setLocations(data);
        };

        return getLocations;
    }, []);

    console.log(locations);

    return (
        <div className="flex flex-col items-start border-white border-solid border-b-2">
            {/* <Navbar /> */}
            {locations.map(location => 
                <Card key={location.id} location={location}/>
            )}
        </div>
    )
}