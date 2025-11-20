import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = person => {
    var request = axios.post(`${baseUrl}`, person)
    return request.then(response => response.data)
}

const update = (id, person) => {
    var request = axios.put(`${baseUrl}/${id}`, person)
    return request.then(response => response.data)
}

const deleteById = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, create, update, deleteById }