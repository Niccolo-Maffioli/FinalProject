import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Card = ({ location }) => {
  return (
    <Link to={`/location/${location.id}`}  className='border-white	border-solid	border-t-2 w-screen flex items-center py-3 pl-3 justify-between hover:text-sky-400'>
      <div className='flex items-center'>
        <img className='w-20 h-10' src={`http://localhost:1337${location.attributes.cover.data.attributes.formats.thumbnail.url}`} alt= {`location${location.id}`} />
        <div className='flex flex-col items-start ml-5'>
          <span className='font-bold text-md'>{location.attributes.title}</span>
          <span className='text-md'>{location.attributes.startdate} / {location.attributes.finaldate}</span>
        </div>
      </div>
      <div className='mr-10'>
        <FontAwesomeIcon icon={faCaretRight} className='text-3xl'/>
      </div>
    </Link>
  ) 
}

export default Card