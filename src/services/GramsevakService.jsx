import axios from "axios";
let baseUrl = "http://localhost:7373/gramsevaks/";
class GramsevakService {
  getAllGramsevaks() {
    return axios.get(baseUrl + "gramsevaks");
  }
  getGramsevakById(gsid) {
    return axios.get(baseUrl + "gramsevaks/" + gsid);
  }
  getGramsevakByUsername(username) {
    return axios.get(baseUrl + "gramsevak/" + username);
  }
  addGramsevak(gramsevak) {
    return axios.post(baseUrl + "gramsevaks/" , gramsevak);
  }
  updateGramsevak(gramsevak) {
    return axios.put(baseUrl + "gramsevaks/" + gramsevak.gsid, gramsevak);
  }
  deleteGramsevak(gsid) {
    return axios.delete(baseUrl + "gramsevaks/" + gsid);
  }
}

export default new GramsevakService();
