import axios from "axios";
let baseUrl = "http://localhost:7373/complaints/";
class ComplaintService {
  getAllComplaints() {
    return axios.get(baseUrl + "complaints");
  }
  getComplaintById(cid) {
    return axios.get(baseUrl + "complaints/" + cid);
  }
  addComplaint(complaint) {
    return axios.post(baseUrl + "complaints/" + complaint.userid, complaint);
  }
  getComplaintByStatus(status) {
    return axios.get(baseUrl + "complaints/status/" + status);
  }
  getComplaintCount(status) {
    return axios.get(baseUrl + "count/" + status);
  }
  addRemarks(complaint) {
    return axios.post(baseUrl + "complaints/", complaint);
  }
  updateComplaint(complaint) {
    return axios.put(baseUrl + "complaints/" + complaint.cid, complaint);
  }
  deleteComplaint(cid) {
    return axios.delete(baseUrl + "complaints/" + cid);
  }
  getLatest() {
    return axios.get(baseUrl + "latest");
  }
  editStatus(complaint) {
    return axios.put(baseUrl+ "complaints/"+complaint.status);
  }
}

export default new ComplaintService();
