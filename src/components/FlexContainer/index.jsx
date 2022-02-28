import React from 'react'

const FlexContainer = ({ title, children }) => {
  return (
    <div className='flex justify-start items-center flex-wrap text-xl'>
      <h2 className=' font-normal mr-3'>{title}: </h2>
      {children}
    </div>
  )
}

export default FlexContainer
