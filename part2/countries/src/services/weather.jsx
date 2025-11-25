import axios from "axios";

const api_key = import.meta.env.VITE_OPENWEATHERMAP_KEY
const api_url = 'https://api.openweathermap.org/data/2.5'

const getByLatLon = (latlon) => {
    const request = axios.get(`${api_url}/weather?lat=${latlon[0]}&lon=${latlon[1]}&appid=${api_key}`)
    return request.then(response => response.data)
}

const getByCity = (city) => {
    const request = axios.get(`${api_url}/weather?q=${city}&appid=${api_key}`)
    return request.then(response => response.data)
}

const getByCityAndCountryCode = (city, countryCode) => {
    const request = axios.get(`${api_url}/weather?q=${city},${countryCode}&appid=${api_key}`)
    return request.then(response => response.data)
}


export default { getByLatLon, getByCity, getByCityAndCountryCode }