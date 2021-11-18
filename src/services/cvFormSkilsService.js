import axios from "axios";
const saveUrl = "http://localhost:8080/api/cvSkils/cvSave"
const listUrl = "http://localhost:8080/api/cvSkils/cvList"
const delUrl = "http://localhost:8080/api/cvSkils/cvDelete"

class cvFormSkilsService {
    cvFormSkilsServiceAdd(cvFormEducation) {
        return axios.post(saveUrl, cvFormEducation)
    }
    cvFormSkilsServiceList() {
        return axios.get(listUrl)
    }
    cvFormSkilsServiceDel(id) {
        return axios.delete(delUrl, {
            data: {
                id: id
            }
        })
    }
}

export default new cvFormSkilsService()

