import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCountriesInfo } from '../../api'
import BreadCrumb from '../../components/BreadCrumb'
import SingleCountry from '../../components/SingleCountry'
import Spinner from '../../components/Spinner'

const CountryPage = () => {
  const { countryName } = useParams()
  const [country, setCountry] = useState([])
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    const getCountryDetails = async () => {
      try {
        setLoading(true)
        const country = await fetchCountriesInfo('name', countryName)
        setCountry(country)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error.message)
      }
    }
    getCountryDetails()
  }, [countryName])

  return (
    <div
      className={`${
        isLoading ? 'h-52 flex flex-col items-between justify-between' : ''
      } container px-6 md:px-10 lg:px-16 xl:px-20 my-5 space-y-5`}
    >
      <BreadCrumb countryName={countryName} />
      {!isLoading ? (
        country?.map((item, i) => {
          return <SingleCountry country={item} key={i} />
        })
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default CountryPage
