import axios from 'axios'

const BASE_URL = `http://localhost:8080/api/employee/`

class APIEmployeeService {

    findAllEmployee = () => {
        return axios.get(BASE_URL);
    }

    findEmployeeById = (id) => {
        return axios.get(BASE_URL + id);
    }

    addNewEmployee = (data) => {
        return axios.post(BASE_URL + `create/`, data);
    }

    updateEmployeeById = (data) => {
        return axios.put(BASE_URL + data.id, data);
    }

    deleteEmployeeById = (id) => {
        return axios.delete(BASE_URL + id);
    }

}

export default new APIEmployeeService()