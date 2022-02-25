import React from 'react'

const CountryCard = ({ name, capital, flags }) => {
  // console.log(name, capital, flags)
  return (
    <div className='card relative overflow-hidden rounded-md shadow-xl h-32 bg-white cursor-pointer'>
      <img
        src={flags.svg}
        alt={`${name.common}'s Flag`}
        className='w-full h-full rounded-md object-cover'
      />
      <div className='card__body absolute w-full h-full top-100p left-0 flex flex-col justify-center items-center text-center text-gray-700 bg-white/70 transition-transform duration-500'>
        <h1 className='text-xl font-bold'>{name && name.common}</h1>
        <h3 className='text-base font-medium'>{capital && capital[0]}</h3>
      </div>
    </div>
  )
}

export default CountryCard
