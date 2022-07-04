import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Location() {
    const [location, setLocation] = useState();
    const params = useParams();

    useEffect(() => {
        const getLocation = async () => {
            const response = await fetch(`http://localhost:1337/api/locations/${params.id}?populate=*`);
            const {data} = await response.json();

            setLocation(data);
        };

        return getLocation;
    }, []);

    console.log(location);

    return (
        <div>
            {location &&
                <div className='m-5 pb-8'>
                    <h2 className='text-2xl font-bold'>{location.attributes.title}</h2>
                    <div className='my-5 lg:flex'>
                        <p className='lg:mr-5'>Data di inizio: {location.attributes.startdate}</p>
                        <p id='finaldate'>Data di fine: {location.attributes.finaldate}</p>
                    </div>
                    <div className='flex flex-col items-start lg:flex-row'>
                        <img src={`http://localhost:1337${location.attributes.cover.data.attributes.formats.thumbnail.url}`} alt={`location${location.id}`} />
                        <p className='mt-5 lg:ml-5'>{location.attributes.description}</p>
                    </div>
                </div>
            }
        </div>
    )
}