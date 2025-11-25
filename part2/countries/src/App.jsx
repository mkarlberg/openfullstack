import { useState, useEffect } from 'react'
import countryService from './services/countries'
import weatherService from './services/weather'
import CountryList from './components/countryList'
import Country from './components/Country'

function App() {
  const [filter, setFilter] = useState('')
  const [countriesSource, setCountriesSource] = useState([])
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    countryService
      .get()
      .then(c => setCountriesSource(c))
  }, [])

  useEffect(() => {
      const result = filter.length !== 0 
        ? countriesSource.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))
        : []

      if (result.length === 1) {
        setCountry(result[0])
        setCountries([]);
      }
      else {
        setCountry(null)
        setCountries(result);
      }
  }, [filter])

  useEffect(() => {
    if (country) {
      weatherService
        .getByCity(country.capital)
        .then(w => setWeather(w))
    }
  }, [country])

  const handleShow = c => {
    setCountry(c)
  }

  return (
    <div>
      <div>find countries <input value={filter} onChange={event => setFilter(event.target.value)} /></div>
      <CountryList countries={countries} handleShow={handleShow} />
      <Country country={country} weather={weather} />
    </div>
  )
}

export default App
