import React, { useState } from 'react'

const SearchBar = ({ countries, setFilteredCountries }) => {
  const [searchName, setSearchName] = useState('')
  const filterCountries = () => {
    const filtered = countries.filter(
      ({ name }) =>
        name.common.toLowerCase().startsWith(searchName.toLowerCase()) ||
        name.common.toLowerCase().includes(searchName.toLowerCase())
    )
    setFilteredCountries(filtered)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    filterCountries()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full md:w-4/5 lg:w-3/5 xl:w-2/4 flex items-center rounded-sm overflow-hidden bg-white mb-12 mx-auto'>
        <input
          className='p-2 flex-grow bg-slate-50 focus:outline-none'
          type='text'
          value={searchName}
          placeholder='Enter a Country Name'
          onChange={(e) => {
            setSearchName(e.target.value)
            filterCountries()
          }}
        />
        <button
          type='submit'
          className='py-2 px-3 bg-slate-400 text-white font-bold'
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
