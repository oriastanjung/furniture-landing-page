import React from 'react'

function ButtonWithoutArrow(props) {
  return (
    <button className='bg-primaryGreen py-[9px] px-[36px]' {...props}>{props.children}</button>
  )
}

export default ButtonWithoutArrow