import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ countryName }) => {
  return (
    <div className='text-base text-gray-800'>
      <Link
        to={'/'}
        className='font-medium hover:underline hover:underline-offset-1'
      >
        Home
      </Link>{' '}
      / <span className='font-bold'>{countryName}</span>
    </div>
  )
}

export default BreadCrumb
