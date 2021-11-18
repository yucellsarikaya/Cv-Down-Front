import axios from "axios";
const saveUrl = "http://localhost:8080/api/cvFromAreas_Of_Interest/cvSave"
const listUrl = "http://localhost:8080/api/cvFromAreas_Of_Interest/cvList"
const delUrl = "http://localhost:8080/api/cvFromAreas_Of_Interest/cvDelete"

class cvFormAreasOfİnterestService{
    cvFormAreasOfİnterestAdd(cvFormEducation){
        return axios.post(saveUrl, cvFormEducation)
    }
    cvFormAreasOfİnterestList(){
        return axios.get(listUrl)
    }
    cvFormAreasOfİnterestDel(id){
        return axios.delete(delUrl, {
            data: {
                id: id
            }
        })
    }
}

export default new cvFormAreasOfİnterestService()

