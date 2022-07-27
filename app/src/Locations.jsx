import { useEffect, useState } from "react";
import Card from "./components/Card";

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

    return (
        <div className="flex flex-col items-start border-white border-solid border-b-2">
            {/* <div className="form-control w-full max-w-xs p-5">
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div> */}
            {/* <Navbar /> */}
            {locations.map(location => 
                <Card key={location.id} location={location}/>
            )}
        </div>
    )
}