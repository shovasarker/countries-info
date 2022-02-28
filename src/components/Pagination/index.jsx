import React from 'react'

const Pagination = ({ pageNumber, setPageNumber, totalItems }) => {
  return (
    <div className='w-full flex justify-end items-center gap-4 font-bold text-green-500 text-base mb-20'>
      {pageNumber !== 0 ? (
        <button
          className='px-3 py-1 rounded-md shadow-xl bg-white border border-green-500 hover:bg-green-500 hover:text-white transition-colors'
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Prev
        </button>
      ) : null}
      {pageNumber > totalItems / 20 - 1 ? null : (
        <button
          className='px-3 py-1 rounded-md shadow-xl bg-white border border-green-500 hover:bg-green-500 hover:text-white transition-colors'
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next
        </button>
      )}
    </div>
  )
}

export default Pagination
