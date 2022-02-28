import React from 'react'

const ShowSingleData = ({ title, value }) => {
  return (
    <p className='text-xl font-normal'>
      {title}: <span className='font-bold ml-1.5 capitalize'>{value}</span>
    </p>
  )
}

export default ShowSingleData
