import React from 'react'

const Pagination = ({ pageNumber, setPageNumber, totalItems }) => {
  return (
    <div className='w-full flex justify-end items-center gap-4 font-bold text-gray-600 text-base mb-20'>
      {pageNumber !== 0 ? (
        <button
          className='px-3 py-1 rounded-sm shadow-lg'
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          prev
        </button>
      ) : null}
      {pageNumber > totalItems / 20 - 1 ? null : (
        <button
          className='px-3 py-1 rounded-sm shadow-lg'
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          next
        </button>
      )}
    </div>
  )
}

export default Pagination
