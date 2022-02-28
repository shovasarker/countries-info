import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchCountriesInfo } from '../../api'
import FlexContainer from '../FlexContainer'
import ShowSingleData from '../ShowSingleData'

const SingleCountry = ({ country }) => {
  const [bordersName, setBordersName] = useState([])
  const [viewAll, setViewAll] = useState(false)

  const handleClick = () => {
    setViewAll(!viewAll)
  }

  useEffect(() => {
    const getBordersName = async () => {
      const bordersName = country?.borders?.map(async (border) => {
        try {
          const result = await fetchCountriesInfo('alpha', border)
          const { name } = result[0]
          return name.common
        } catch (error) {
          console.log(error.message)
        }
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
    currencies,
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
        <ShowSingleData title={'Official Name'} value={name?.official} />
        {/* alternate name */}
        {viewAll ? (
          <>
            <FlexContainer title={'Alternate Names'}>
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
            </FlexContainer>
            {/* independence */}
            <ShowSingleData
              title={'Independent'}
              value={JSON.stringify(independent)}
            />
          </>
        ) : null}

        {/* capital */}
        <ShowSingleData title={'Capital'} value={capital && capital[0]} />
        {/* area */}
        <ShowSingleData
          title={'Area'}
          value={`${area?.toLocaleString('en')} Km²`}
        />
        {/* population */}
        <ShowSingleData
          title={'Population'}
          value={population?.toLocaleString('en')}
        />
        {/* currencies */}
        <FlexContainer title={'Currency'}>
          {currencies &&
            Object.keys(currencies)?.map((key, i) => {
              return (
                <span
                  key={i}
                  className='after:content-[","] last-of-type:after:content-[""] font-bold mr-2'
                >
                  {currencies[key]?.name}({currencies[key]?.symbol})
                </span>
              )
            })}
        </FlexContainer>
        {/* languages */}
        <FlexContainer title={'Languages'}>
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
        </FlexContainer>
        {viewAll ? (
          <>
            {/* maps */}
            <FlexContainer title={'Maps'}>
              {maps &&
                Object.keys(maps)?.map((key, i) => {
                  return (
                    <a
                      className='mr-2 underline underline-offset-1 hover:opacity-70 transition-opacity font-bold after:content-[","] last-of-type:after:content-[""]'
                      target='_blank'
                      rel='noreferrer'
                      href={maps[key]}
                      key={i}
                    >
                      {key?.toUpperCase()}
                    </a>
                  )
                })}
            </FlexContainer>
            {/* borders */}
            <FlexContainer title={'Borders With'}>
              {bordersName &&
                bordersName?.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      to={`/${item}`}
                      className='after:content-[","] last-of-type:after:content-[""] font-bold mr-2 underline underline-offset-1 hover:opacity-70 transition-opacity'
                    >
                      {item}
                    </Link>
                  )
                })}
            </FlexContainer>
          </>
        ) : null}

        {/* continent */}
        <ShowSingleData
          title={'Continent'}
          value={continents && continents[0]}
        />
        {viewAll ? (
          <>
            {/* region */}
            <ShowSingleData title={'Region'} value={region && region} />
            {/* subregion */}
            <ShowSingleData
              title={'Sub-region'}
              value={subregion && subregion}
            />
            {/* status */}
            <ShowSingleData title={'Status'} value={status && status} />
            {/* un member */}
            <ShowSingleData
              title={'Un Member'}
              value={JSON.stringify(unMember)}
            />
            {/* start of week */}
            <ShowSingleData
              title={'Start of week'}
              value={startOfWeek && startOfWeek}
            />

            {/* timezone */}
            <ShowSingleData
              title={'Time Zone'}
              value={timezones && timezones[0]}
            />
          </>
        ) : null}
        <button
          className='w-full md:w-2/5 !mt-12 py-2 text-lg font-bold text-green-500 border border-green-500 rounded-md bg-transparent hover:bg-green-500 hover:text-green-50 transition-colors duration-300'
          onClick={handleClick}
        >
          {viewAll ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  )
}

export default SingleCountry
