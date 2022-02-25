import React, { useEffect, useState } from 'react'
import { fetchCountriesInfo } from '../../api'
import MainSection from '../../components/MainSection'
import Pagination from '../../components/Pagination'
import SearchBar from '../../components/SearchBar'
import SortAndFilter from '../../components/SortAndFilter'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [sortBy, setSortBy] = useState('name')
  const [filterBy, setFilterBy] = useState('name')
  const [filteredCountries, setFilteredCountries] = useState([])
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      console.log('Loading...')
      const countries = await fetchCountriesInfo()
      console.table('Countries: ', countries)
      setIsLoading(false)
      setCountries(countries)
      setFilteredCountries(countries)
    }
    fetchData()
  }, [])

  //There is a small bug in the sort function
  useEffect(() => {
    if (isLoading) return
    const sortedcountries = filteredCountries
    console.log('Sort By: ', sortBy)
    console.log('Before Sort: ', sortedcountries)
    if (sortBy.includes('name')) {
      sortedcountries.sort((country1, country2) => {
        if (country1.name.common > country2.name.common) return 1
        if (country1.name.common < country2.name.common) return -1
        return 0
      })
    } else {
      sortedcountries.sort(
        (country1, country2) => country2[sortBy] - country1[sortBy]
      )
    }
    console.log('After Sort: ', sortedcountries)
    setFilteredCountries(sortedcountries)
  }, [sortBy, filteredCountries, isLoading])

  return (
    <section className='container px-6 md:px-10 lg:px-16 xl:px-20 '>
      <SearchBar
        countries={countries}
        filterBy={filterBy}
        setFilteredCountries={setFilteredCountries}
      />
      <SortAndFilter
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <MainSection countries={filteredCountries} pageNumber={pageNumber} />
      )}
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalItems={filteredCountries.length}
      />
    </section>
  )
}

export default HomePage
