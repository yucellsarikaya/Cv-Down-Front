import axios from "axios";
const saveUrl = "http://localhost:8080/api/cvEducational_Background/cvSave"
const listUrl = "http://localhost:8080/api/cvEducational_Background/cvList"
const delUrl = "http://localhost:8080/api/cvEducational_Background/cvDelete"

class cvFormEducationService{
    cvFormEducationAdd(cvFormEducation){
        return axios.post(saveUrl, cvFormEducation)
    }
    cvFormEducationList(){
        return axios.get(listUrl)
    }
    cvFormEducationDel(id){
        return axios.delete(delUrl, {
            data: {
                id: id
            }
        })
    }
}

export default new cvFormEducationService()
