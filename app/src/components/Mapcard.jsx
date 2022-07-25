import React from 'react'

const Mapcard = () => {
  return (
    <div className='card w-70 bg-base-100 shadow-xl m-5 h-auto'>
        <figure figure='true'><img src='https://placeimg.com/400/225/arch' alt='Shoes' /></figure>
        <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis dolores porro id minima? Deleniti architecto, accusamus, voluptas quod quasi quaerat cum eum, neque saepe placeat inventore distinctio officiis laudantium!</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Mapcard