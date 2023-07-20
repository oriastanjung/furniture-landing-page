import React from 'react'

function SectionTitle(props) {
  return (
    <div className={`bg-[url('/bgframe.png')] px-8 py-3 w-full flex items-center justify-center bg-cover bg-center`}>
        <h4 className='text-[#2F2F2F] font-bold text-xl'>{props.children}</h4>
    </div>
  )
}

export default SectionTitle