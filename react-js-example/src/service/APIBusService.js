import axios from 'axios'

const BASE_URL = `http://localhost:8080/api/bus/`

class APIBusService {

    findAll = () => {
        return axios.get(BASE_URL)
    }

    findById = (id) => {
        return axios.get(BASE_URL + id)
    }

    addNew = (data) => {
        return axios.post(BASE_URL + `create/`, data)
    }

    updateById = (data) => {
        return axios.post(BASE_URL + data.id, data)
    }

    removeById = (id) => {
        return axios.remove(BASE_URL + id)
    }
}


export default new APIBusService()