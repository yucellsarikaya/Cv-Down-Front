import axios from "axios";
const saveUrl = "http://localhost:8080/api/cvCertificate/cvSave"
const listUrl = "http://localhost:8080/api/cvCertificate/cvList"
const delUrl = "http://localhost:8080/api/cvCertificate/cvDelete"

class cvFormCertificateService {
    cvFormCertificateAdd(cvFormEducation) {
        return axios.post(saveUrl, cvFormEducation)
    }
    cvFormCertificateList() {
        return axios.get(listUrl)
    }
    cvFormCertificateDel(id) {
        return axios.delete(delUrl, {
            data: {
                id: id
            }
        })
    }
}

export default new cvFormCertificateService()
