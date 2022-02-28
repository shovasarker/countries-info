import React from 'react'

const SortAndFilter = ({
  sortBy,
  setSortBy,
  filterBy,
  setFilterBy,
  selectedSubfilter,
  subfilterBy,
  setSubfilterBy,
}) => {
  return (
    <div className='flex justify-start items-center flex-wrap gap-5 mb-12'>
      <div className='flex items-start justify-start gap-3'>
        <label htmlFor='filter' className='font-bold flex-shrink-0 py-2'>
          Filter By:
        </label>
        <div className='flex justify-start items-center flex-wrap gap-2'>
          <select
            className='focus:outline-none bg-transparent cursor-pointer p-2'
            name='filter-type'
            id='filter'
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            {[
              ['All', 'all'],
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
          {filterBy !== 'all' ? (
            <select
              className='focus:outline-none bg-transparent cursor-pointer p-2'
              name='filter-type'
              id='filter'
              value={subfilterBy}
              onChange={(e) => setSubfilterBy(e.target.value)}
            >
              {selectedSubfilter?.map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                )
              })}
            </select>
          ) : null}
        </div>
      </div>

      <div className='flex items-center justify-start gap-3'>
        <label htmlFor='sort' className='font-bold'>
          Sort By:
        </label>
        <select
          className='focus:outline-none bg-transparent cursor-pointer p-2'
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
