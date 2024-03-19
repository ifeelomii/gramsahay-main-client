import { useEffect, useState } from "react";
import GramsevakService from "../../services/GramsevakService";
import { Link } from "react-router-dom";
import "./GSpage.css";

const AllGS = () => {
  const [gslist, setGsList] = useState([]);

  const fetchdata = () => {
    GramsevakService.getAllGramsevaks()
      .then((result) => {
        console.log(result.data);
        setGsList([...result.data]);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const deleteGramsevak = (gsid) => {
    GramsevakService.deleteGramsevak(gsid)
      .then((result) => {
        console.log(result.data);
        fetchdata();
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="display-gs-wrapper">
        <br></br>
        <h5>Welcome {localStorage.getItem("gsusername")}</h5>
        <Link to="/gramsevakas/addgramsevak" id="action-gs-btn">
          <button
            type="button"
            name="btn"
            id="action-user-btn"
            className="btn btn-success"
          >
            {" "}
            Add New Gramsevak
          </button>
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">GS Id</th>
              <th scope="col">Full Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">District</th>
              <th scope="col">Taluka</th>
              <th scope="col">Village</th>
              <th scope="col">Status</th>
              <th
                scope="col"
                style={{
                  textAlign: "center",
                  width: "10px"
                }}
              >
                Delete
              </th>
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
            {gslist.map((ob) => (
              <tr>
                <td>{ob.gsId}</td>
                <td>{ob.firstName + " " + ob.lastName}</td>
                <td>{ob.username}</td>
                <td>{ob.phoneNumber}</td>
                <td>{ob.district}</td>
                <td>{ob.taluka}</td>
                <td>{ob.village}</td>
                <td>{ob.status ? "Available" : "Unavailable"}</td>
                <td>
                  <button
                    type="button"
                    name="btn"
                    id="delete"
                    className="btn btn-danger rounded-pill"
                    onClick={() => {
                      deleteGramsevak(ob.gsId);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link
                    to={`/gramsevaks/editgramsevak/${ob.gsId}`}
                    state={{ gsdata: ob }}
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
                  <Link to={`/gramsevak/viewgramsevak/${ob.gsId}`}>
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
export default AllGS;
