import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header>
      <nav className='container px-6 md:px-10 lg:px-16 xl:px-20'>
        <div className='flex justify-between items-center py-5'>
          <h1
            className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 cursor-pointer'
            onClick={() => navigate('/')}
          >
            Countries Info
          </h1>
        </div>
      </nav>
    </header>
  )
}

export default Header
