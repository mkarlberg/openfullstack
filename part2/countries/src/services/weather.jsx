import axios from "axios";

const api_key = import.meta.env.VITE_OPENWEATHERMAP_KEY
const api_url = 'https://api.openweathermap.org/data/2.5'

const get = (latlon) => {
    const request = axios.get(`${api_url}/weather?lat=${latlon[0]}&lon=${latlon[1]}&appid=${api_key}`)
    return request.then(response => response.data)
}


export default { get }