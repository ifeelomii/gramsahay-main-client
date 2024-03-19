import { useEffect, useState } from "react";
import ComplaintService from "../../services/ComplaintService";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import "./Complaintspage.css";

const LatestComplaints = () => {
  const [list, setCompList] = useState([]);

  useEffect(() => {
    fetchLatest();
  }, []);

  const fetchLatest = async () => {
    try {
        const result = await ComplaintService.getLatest();
        console.log(...result.data)
      setCompList(result.data || []);
    } catch (error) {
      console.error("Error fetching latest complaints:", error);
    }
  };

  return (
    <>
      <div className="display-comp-wrapper">
        <br></br>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Complaint Id</th>
              <th scope="col">User Id</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Posted At</th>
              <th scope="col">District</th>
              <th scope="col">Taluka</th>
              <th scope="col">Village</th>
              <th scope="col">Status</th>
              <th
                scope="col"
                style={{
                  textAlign: "center",
                  width: "8px"
                }}
              >
                Edit
              </th>
              <th
                scope="col"
                style={{
                  textAlign: "center",
                  width: "8px"
                }}
              >
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((ob) => (
              <tr key={ob.complaintId}>
                <td>{ob.complaintId ? ob.complaintId : "null"}</td>
                <td>{ob.userId ? ob.userId : "null"}</td>
                <td>{ob.category ? ob.category : "null"}</td>
                <td>{ob.description ? ob.description : "null"}</td>
                <td>
                  {ob.postedAt
                    ? moment(ob.postedAt).format("DD/MM/YYYY HH:mm:ss")
                    : "null"}
                </td>
                <td>{ob.district ? ob.district : "null"}</td>
                <td>{ob.taluka ? ob.taluka : "null"}</td>
                <td>{ob.village ? ob.village : "null"}</td>
                <td>{ob.status ? ob.status : "null"}</td>

                <td>
                  <Link
                    to={`/complaints/editcomplaint/${ob.complaintId}`}
                    state={{ data: ob }}
                  >
                    <button
                      type="button"
                      name="btn"
                      id="edit"
                      className="btn btn-primary rounded-pill"
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/complaints/viewcomplaint/${ob.complaintId}`}>
                    <button
                      type="button"
                      name="btn"
                      id="view"
                      className="btn btn-info rounded-pill"
                    >
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default LatestComplaints;
