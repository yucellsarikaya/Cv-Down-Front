import axios from "axios";
const saveUrl = "http://localhost:8080/api/cvForm/cvSave"
const listUlr = "http://localhost:8080/api/cvForm/cvList"
const delUlr = "http://localhost:8080/api/cvForm/cvDelete"

class cvFormService {
    cvformSave(cvForm) {
        return axios.post(saveUrl, cvForm)
    }
    cvFormList() {
        return axios.get(listUlr)
    }
    cvFormDel(id){
        return axios.delete(delUlr, {
            data: {
                id: id
            }
        })
    }
}

export default new cvFormService()