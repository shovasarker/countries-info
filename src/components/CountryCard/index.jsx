import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const CountryCard = ({ name, capital, flags, population, area }) => {
  // console.log(name, capital, flags)
  const navigate = useNavigate()
  return (
    <motion.div
      layout
      className='overflow-hidden rounded-md cursor-pointer'
      onClick={() => navigate(`/${name.common}`)}
    >
      <div className='card relative'>
        <img
          src={flags.svg}
          alt={`${name.common}'s Flag`}
          className='w-full aspect-[4/2.5] rounded-md object-cover  shadow-xl '
        />
        <div className='card__body absolute w-full h-full top-0 left-0 right-0 bottom-0 opacity-0 flex flex-col justify-center items-center text-center text-gray-700 bg-white/70 transition-opacity duration-500'>
          <h3 className='text-base font-normal'>
            Capital: <span className='font-bold'>{capital && capital[0]}</span>
          </h3>
          <h3 className='text-base font-normal'>
            Area:{' '}
            <span className='font-bold'>
              {area && area?.toLocaleString('en')}
            </span>
          </h3>
          <h3 className='text-base font-normal'>
            Population:{' '}
            <span className='font-bold'>
              {population && population?.toLocaleString('en')}
            </span>
          </h3>
        </div>
      </div>
      <h1 className='text-base text-center font-bold mt-2'>
        {name && name.common}
      </h1>
    </motion.div>
  )
}

export default CountryCard
