import axios from "axios";
let baseUrl = "http://localhost:7373/admins/";
class AdminService {
  getAllAdmins() {
    return axios.get(baseUrl + "admins");
  }
  getAdminById(admid) {
    return axios.get(baseUrl + "admins/" + admid);
  }
  getAdminByUsername(username) {
    return axios.get(baseUrl + "admin/" + username);
  }
  addAdmin(admin) {
    return axios.post(baseUrl + "admins/" , admin);
  }
  updateAdmin(admin) {
    return axios.put(baseUrl + "admins/" + admin.admid, admin);
  }
  deleteAdmin(admid) {
    return axios.delete(baseUrl + "admins/" + admid);
  }
}

export default new AdminService();
