import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import CountryPage from './pages/CountryPage'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <>
      <Header />
      <AnimatePresence>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:countryName' element={<CountryPage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
