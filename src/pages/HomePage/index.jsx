import React, { useEffect, useState } from 'react'
import { fetchCountriesInfo } from '../../api'
import MainSection from '../../components/MainSection'
import Pagination from '../../components/Pagination'
import SearchBar from '../../components/SearchBar'
import SortAndFilter from '../../components/SortAndFilter'
import Spinner from '../../components/Spinner'
import { SUB_FILTER_DATA } from '../../data'

const HomePage = () => {
  const [subFilterData, setSubfilterData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [sortedCountries, setSortedCountries] = useState([])
  const [sortBy, setSortBy] = useState('name')
  const [filterBy, setFilterBy] = useState('all')
  const [selectedSubfilter, setSelectedSubfilter] = useState(
    subFilterData[filterBy]
  )
  const [subfilterBy, setSubfilterBy] = useState(
    selectedSubfilter && selectedSubfilter[0]
  )
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
    setSubfilterData(SUB_FILTER_DATA)
  }, [])

  useEffect(() => {
    setSelectedSubfilter(subFilterData[filterBy])
    setSubfilterBy(selectedSubfilter && selectedSubfilter[0])
  }, [filterBy, subFilterData, selectedSubfilter])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const countries = await fetchCountriesInfo(filterBy, subfilterBy)
      setIsLoading(false)
      setCountries(countries)
      setFilteredCountries(countries)
    }
    fetchData()
  }, [filterBy, subfilterBy])

  //There is a small bug in the sort function
  useEffect(() => {
    if (isLoading) return
    if (!Array.isArray(filteredCountries)) {
      setFilteredCountries([])
      return
    }
    if (sortBy.includes('name')) {
      filteredCountries?.sort((country1, country2) => {
        if (country1.name.common > country2.name.common) return 1
        if (country1.name.common < country2.name.common) return -1
        return 0
      })
    } else {
      filteredCountries?.sort(
        (country1, country2) => country2[sortBy] - country1[sortBy]
      )
    }

    setSortedCountries([...filteredCountries])
  }, [sortBy, filteredCountries, isLoading])

  return (
    <section className='container px-6 md:px-10 lg:px-16 xl:px-20 '>
      <SearchBar
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />
      <SortAndFilter
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        selectedSubfilter={selectedSubfilter}
        subfilterBy={subfilterBy}
        setSubfilterBy={setSubfilterBy}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <MainSection countries={sortedCountries} pageNumber={pageNumber} />
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalItems={sortedCountries.length}
          />
        </>
      )}
    </section>
  )
}

export default HomePage
