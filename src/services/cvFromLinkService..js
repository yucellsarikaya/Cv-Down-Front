import axios from "axios";
const saveUrl = "http://localhost:8080/api/cvLink/cvSave"
const listUrl = "http://localhost:8080/api/cvLink/cvList"
const delUrl = "http://localhost:8080/api/cvLink/cvDelete"

class cvFromLinkService {
    cvFromLinkAdd(cvFormEducation) {
        return axios.post(saveUrl, cvFormEducation)
    }
    cvFromLinkList() {
        return axios.get(listUrl)
    }
    cvFromLinkDel(id) {
        return axios.delete(delUrl, {
            data: {
                id: id
            }
        })
    }
}

export default new cvFromLinkService()
