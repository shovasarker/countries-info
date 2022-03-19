import CountryCard from '../CountryCard'
import { motion, AnimatePresence } from 'framer-motion'

const MainSection = ({ countries, pageNumber }) => {
  return (
    <div>
      {countries.length !== 0 ? (
        <motion.div
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-6 xl:gap-8 mb-20'
        >
          <AnimatePresence>
            {countries
              ?.filter(
                (item, i) => i >= 20 * pageNumber && i < 20 * (pageNumber + 1)
              )
              ?.map(({ name, capital, flags, population, area }, i) => {
                // console.log(name, capital, flags)
                return (
                  <CountryCard
                    key={i}
                    name={name}
                    capital={capital}
                    flags={flags}
                    population={population}
                    area={area}
                  />
                )
              })}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div>
          <h1 className='text-center text-xl font-semibold'>
            Results Not Found...
          </h1>
        </div>
      )}
    </div>
  )
}

export default MainSection
