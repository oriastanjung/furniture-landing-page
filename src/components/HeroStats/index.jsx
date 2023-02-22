import React from 'react'

function HeroStats(props) {
  return (
    <div className='flex flex-col'>
        <h5 className='font-medium text-3xl'>{props.title}</h5>
        <p className='text-base'>{props.desc}</p>
    </div>
  )
}

export default HeroStats