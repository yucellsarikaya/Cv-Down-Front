import axios from "axios";
const saveUrl = "http://localhost:8080/api/person/save"
const bringId = "http://localhost:8080/api/person/getId"
const personData = "http://localhost:8080/api/person/getById/"
const updateUrl = "http://localhost:8080/api/person/update"

class personService {
    register(person) {
        return axios.post(saveUrl, person)
    }
    login(mail, pass) {
        return axios.get("http://localhost:8080/api/person/login?mail=" + mail + "&pass=" + pass )
    }
    getId(){
        return axios.get(bringId)
    }
    getById(id){
        return axios.get(personData + id)
    }
    update(person) {
        return axios.post(updateUrl, person)
    }
}

export default new personService()
