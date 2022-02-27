import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchCountriesInfo } from '../../api'

const SingleCountry = ({ country }) => {
  const [bordersName, setBordersName] = useState([])
  useEffect(() => {
    const getBordersName = async () => {
      const bordersName = country?.borders?.map(async (border) => {
        const result = await fetchCountriesInfo('alpha', border)
        const { name } = result[0]
        return name.common
      })
      const names = bordersName ? await Promise.all(bordersName) : []
      setBordersName(names)
    }
    getBordersName()
  }, [country])
  const {
    altSpellings,
    area,
    capital,
    continents,
    region,
    subregion,
    flags,
    languages,
    maps,
    name,
    population,
    status,
    timezones,
    startOfWeek,
    unMember,
    independent,
  } = country
  return (
    <div className='flex flex-col lg:flex-row justify-center items-start gap-6 text-gray-700 my-10'>
      {/* Flag */}
      <div className='w-full lg:w-3/5 order-first lg:order-last'>
        <img
          src={flags && flags.svg}
          alt=''
          className='w-full object-contain'
        />
      </div>
      <div className='space-y-3 w-full'>
        {/* common name */}
        <h1 className='text-4xl font-bold mb-10'>{name?.common}</h1>
        {/* official name */}
        <h2 className='text-xl font-normal'>
          Official Name:{' '}
          <span className='font-bold ml-1.5'>{name?.official}</span>
        </h2>
        {/* alternate name */}
        <div className='flex justify-start items-center flex-wrap text-xl'>
          <h2 className=' font-normal mr-3'>Alternate Names: </h2>
          {altSpellings?.length > 0 &&
            altSpellings?.map((item, i) => {
              return (
                <span
                  key={i}
                  className='after:content-[","] last-of-type:after:content-[""] font-bold mr-2'
                >
                  {item}
                </span>
              )
            })}
        </div>
        {/* independence */}
        <p className='text-xl font-normal'>
          Independent:{' '}
          <span className='font-bold ml-1.5 capitalize'>
            {JSON.stringify(independent)}
          </span>
        </p>
        {/* capital */}
        <p className='text-xl font-normal'>
          Capital:{' '}
          <span className='font-bold ml-1.5'>{capital && capital[0]}</span>
        </p>
        {/* area */}
        <p className='text-xl font-normal'>
          Area:{' '}
          <span className='font-bold ml-1.5'>
            {area?.toLocaleString('en')} sq km
          </span>
        </p>
        {/* population */}
        <p className='text-xl font-normal'>
          Population:{' '}
          <span className='font-bold ml-1.5'>
            {population?.toLocaleString('en')}
          </span>
        </p>
        {/* languages */}
        <div className='flex justify-start items-center flex-wrap text-xl'>
          <h2 className=' font-normal mr-3'>Languages: </h2>
          {languages &&
            Object.keys(languages)?.map((key, i) => {
              return (
                <span
                  key={i}
                  className='after:content-[","] last-of-type:after:content-[""] font-bold mr-2'
                >
                  {languages[key]}
                </span>
              )
            })}
        </div>
        {/* maps */}
        <div className='flex justify-start items-center flex-wrap text-xl'>
          <h2 className=' font-normal mr-3'>Maps: </h2>
          {maps &&
            Object.keys(maps)?.map((key, i) => {
              return (
                <a
                  className='mr-2 hover:underline hover:underline-offset-1 font-bold after:content-[","] last-of-type:after:content-[""]'
                  target='_blank'
                  rel='noreferrer'
                  href={maps[key]}
                  key={i}
                >
                  {key?.toUpperCase()}
                </a>
              )
            })}
        </div>
        {/* borders */}
        <div className='flex justify-start items-center flex-wrap text-xl'>
          <h2 className=' font-normal mr-3'>Borders With: </h2>
          {bordersName &&
            bordersName?.map((item, i) => {
              return (
                <Link
                  key={i}
                  to={`/${item}`}
                  className='after:content-[","] last-of-type:after:content-[""] font-bold mr-2 hover:underline hover:underline-offset-1'
                >
                  {item}
                </Link>
              )
            })}
        </div>
        {/* continent */}
        <p className='text-xl font-normal'>
          Continent:{' '}
          <span className='font-bold ml-1.5'>
            {continents && continents[0]}
          </span>
        </p>
        {/* region */}
        <p className='text-xl font-normal'>
          Region: <span className='font-bold ml-1.5'>{region && region}</span>
        </p>
        {/* subregion */}
        <p className='text-xl font-normal'>
          Sub-region:{' '}
          <span className='font-bold ml-1.5'>{subregion && subregion}</span>
        </p>
        {/* status */}
        <p className='text-xl font-normal'>
          Status:{' '}
          <span className='font-bold ml-1.5 capitalize'>
            {status && status}
          </span>
        </p>
        {/* un member */}
        <p className='text-xl font-normal'>
          Un Member:{' '}
          <span className='font-bold ml-1.5 capitalize'>
            {JSON.stringify(unMember)}
          </span>
        </p>
        {/* start of week */}
        <p className='text-xl font-normal'>
          Start of week:{' '}
          <span className='font-bold ml-1.5 capitalize'>
            {startOfWeek && startOfWeek}
          </span>
        </p>
        {/* timezone */}
        <p className='text-xl font-normal'>
          Time Zone:{' '}
          <span className='font-bold ml-1.5'>{timezones && timezones[0]}</span>
        </p>
      </div>
    </div>
  )
}

export default SingleCountry
