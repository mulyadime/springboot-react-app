import axios from 'axios'

const BASE_URL = `http://localhost:8080/api/search/`

class APILookupService {

    findAllLookupGroup = () => {
        return axios.get(BASE_URL);
    }

    findLookupGroupById = (id) => {
        return axios.get(BASE_URL + id);
    }

    addNewLookupGroup = (data) => {
        return axios.post(BASE_URL + `create/`, data);
    }

    updateLookupGroupById = (data) => {
        return axios.put(BASE_URL + data.id, data);
    }

    deleteLookupGroupById = (id) => {
        return axios.delete(BASE_URL + id);
    }

    findLookupByFk = (id) => {
        return axios.get(BASE_URL + `detail/` + id)
    }

    findLookupById = (referensiDetailId, detailId) => {
        return axios.get(BASE_URL + `detail/` + referensiDetailId + `/` + detailId)
    }

    addNewLookup = (data) => {
        return axios.post(BASE_URL + `detail/create`, data)
    }

    updateLookupById = (data) => {
        return axios.put(BASE_URL + `detail/` + data.lookupGrpId + `/` + data.id, data)
    }

    deleteLookupById = (id) => {
        return axios.delete(BASE_URL + `detail/` + id)
    }

}

export default new APILookupService()