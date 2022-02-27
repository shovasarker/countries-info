import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import CountryPage from './pages/CountryPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:countryName' element={<CountryPage />} />
      </Routes>
    </>
  )
}

export default App
