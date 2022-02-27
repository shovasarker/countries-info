export const fetchCountriesInfo = async (title, value) => {
  const baseUrl = `https://restcountries.com/v3.1/`
  const valueArray = value?.split(' ')?.join('%20')
  const searchUrl = `${baseUrl}${title}/${
    title !== 'all' && valueArray ? valueArray : ''
  }`
  const res = await fetch(searchUrl)
  const data = await res.json()
  return data
}
