import React from 'react'

const SortAndFilter = ({ sortBy, setSortBy, filterBy, setFilterBy }) => {
  return (
    <div className='flex justify-start items-center gap-5 mb-12'>
      <div>
        <label htmlFor='filter' className='mr-3'>
          Filter By:
        </label>
        <select
          className='focus:outline-none bg-white cursor-pointer'
          name='filter-type'
          id='filter'
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
        >
          {[
            ['Name', 'name'],
            ['Region', 'region'],
            ['Subregion', 'subregion'],
          ].map(([item, value], i) => {
            return (
              <option key={i} value={value}>
                {item}
              </option>
            )
          })}
        </select>
      </div>
      <div>
        <label htmlFor='sort' className='mr-3'>
          Sort By:
        </label>
        <select
          className='focus:outline-none bg-white cursor-pointer'
          name='sort-type'
          id='sort'
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {[
            ['Name', 'name'],
            ['Area', 'area'],
            ['Population', 'population'],
          ].map(([item, value], i) => {
            return (
              <option key={i} value={value}>
                {item}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default SortAndFilter
