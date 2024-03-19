import { useEffect, useState } from "react";
import ComplaintService from "../../services/ComplaintService";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import "./Complaintspage.css";

const NewComplaints = () => {
  const [complaintlist, setCompList] = useState([]);

  const params = useParams();
  // console.log(params.username)
  const fetchdata = () => {
    ComplaintService.getComplaintByStatus("new")
      .then((result) => {
        console.log(result.data);
        setCompList([...result.data]);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const deleteComplaint = (cid) => {
    ComplaintService.deleteComplaint(cid)
      .then((result) => {
        console.log(result.data);
        fetchdata();
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="display-comp-wrapper">
        <br></br>
        <Link to="/complaints/addcomplaint" id="action-comp-btn">
          <button
            type="button"
            name="btn"
            id="action-comp-btn"
            className="btn btn-success"
          >
            {" "}
            Add New Compaint
          </button>
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Complaint Id</th>
              {/* <th scope="col">User Id</th> */}
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Posted At</th>
              <th scope="col">District</th>
              <th scope="col">Taluka</th>
              <th scope="col">Village</th>
              <th scope="col">Status</th>
              <th scope="col">Remarks</th>
              {/* <th
                scope="col"
                style={{
                  textAlign: "center",
                  width: "10px"
                }}
              >
                Delete
              </th> */}
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
              {/* <th
                scope="col"
                style={{
                  textAlign: "center",
                  width: "8px"
                }}
              >
                Remarks
              </th> */}
            </tr>
          </thead>
          <tbody>
            {complaintlist.map((ob) => (
              <tr key={ob.complaintId}>
                <td>{ob.complaintId ? ob.complaintId : "null"}</td>
                {/* <td>{ob.userId ? ob.userId : "null"}</td> */}
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
                <td>{ob.remarks ? ob.remarks : "none"}</td>
                {/* <td>
                  <button
                    type="button"
                    name="btn"
                    id="delete"
                    className="btn btn-danger rounded-pill"
                    onClick={() => {
                      deleteComplaint(ob.complaintId);
                    }}
                  >
                    Delete
                  </button>
                </td> */}
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
                {/* <td>
                  <Link
                    to={`/complaints/addremark/${ob.complaintId}`}
                    state={{ data: ob }}
                  >
                    <button
                      type="button"
                      name="btn"
                      id="view"
                      className="btn btn-secondary rounded-pill"
                    >
                      Add
                    </button>
                  </Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default NewComplaints;
