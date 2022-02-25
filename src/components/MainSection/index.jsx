import CountryCard from '../CountryCard'

const MainSection = ({ countries, pageNumber }) => {
  console.log(pageNumber)
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-6 xl:gap-8 mb-20'>
      {countries
        ?.filter((item, i) => i >= 20 * pageNumber && i < 20 * (pageNumber + 1))
        ?.map(({ name, capital, flags }, i) => {
          // console.log(name, capital, flags)
          return (
            <CountryCard key={i} name={name} capital={capital} flags={flags} />
          )
        })}
    </div>
  )
}

export default MainSection
