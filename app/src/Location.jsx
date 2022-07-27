import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

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

    return (
        <>
            <div>
                {location &&
                    <div className='m-5 pb-8'>
                        <h2 className='text-2xl font-bold'>{location.attributes.title}</h2>
                        <div className='flex flex-col items-start lg:flex-row'>
                           <div className="flex justify-center items-center mt-5">
                                <img src={`http://localhost:1337${location.attributes.cover.data.attributes.formats.thumbnail.url}`} alt={`location${location.id}`} />
                                <p className='lg:mr-5 ml-5'>{location.attributes.startdate} - {location.attributes.finaldate}</p>
                           </div>
                            <p className='my-5 lg:ml-5'>{location.attributes.description}</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link className="ml-36"  to="/" >Mostra Percorso </Link>
                            <FontAwesomeIcon icon={faArrowRight} className='ml-2'/>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}