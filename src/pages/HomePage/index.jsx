import React, { useEffect, useState } from 'react'
import { fetchCountriesInfo } from '../../api'
import MainSection from '../../components/MainSection'
import SearchBar from '../../components/SearchBar'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [countries, setCountries] = useState([])
  let [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const countries = await fetchCountriesInfo()
      console.log(countries)
      setIsLoading(false)
      setCountries(countries)
      setFilteredCountries(countries)
    }
    fetchData()
  }, [])
  return (
    <section className='container px-6 md:px-10 lg:px-16 xl:px-20 '>
      <SearchBar
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <MainSection countries={filteredCountries} />
      )}
    </section>
  )
}

export default HomePage
