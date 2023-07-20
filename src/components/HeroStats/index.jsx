import React from 'react'

function HeroStats(props) {
  return (
    <div className='flex flex-col'>
        <h5 className='font-medium text-md md:text-3xl'>{props.title}</h5>
        <p className='text-sm md:text-base'>{props.desc}</p>
    </div>
  )
}

export default HeroStats