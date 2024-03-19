import axios from "axios";
let baseUrl = "http://localhost:7373/feedbacks/";
class FeedbackService {
  getAllFeedbacks() {
    return axios.get(baseUrl + "feedbacks");
  }
    getFeedbackById(fid) {
      return axios.get(baseUrl + "feedbacks/" + fid);
    }
    addFeedback(feedback) {
      return axios.post(baseUrl + "feedbacks/" , feedback);
  }
//   getAdminByUsername(username) {
//     return axios.get(baseUrl + "admin/" + username);
//   }
//   updateAdmin(admin) {
//     return axios.put(baseUrl + "admins/" + admin.admid, admin);
//   }
//   deleteAdmin(admid) {
//     return axios.delete(baseUrl + "admins/" + admid);
//   }
}

export default new FeedbackService();
