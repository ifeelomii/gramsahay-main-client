import axios from "axios";
let baseUrl = "http://localhost:7373/login/";
class LoginService {
  adminLogin(admin) {
    return axios.post(baseUrl + "admin", admin);
  }
  userLogin(user) {
    return axios.post(baseUrl + "user", user);
  }
  gramsevakLogin(gramsevak) {
    return axios.post(baseUrl + "gramsevak", gramsevak);
  }
}

export default new LoginService();
