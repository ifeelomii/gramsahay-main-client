import { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import { Link, useParams } from "react-router-dom";
import './Userpage.css' 

const AllUsers = () => {
  const params = useParams();

  const [userlist, setUserList] = useState([]);
  
  // console.log(params.username)
  const fetchdata = () => {
    UserService.getAllUsers   ()
      .then((result) => {
        console.log(result.data);
        setUserList([...result.data]);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const deleteUser = (uid) => {
    UserService.deleteUser(uid)
      .then((result) => {
        console.log(result.data);
        fetchdata();
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="display-user-wrapper">
        <br></br>
        <Link to="/users/adduser" id="action-user-btn">
          <button
            type="button"
            name="btn"
            id="action-user-btn"
            className="btn btn-success"
          >
            {" "}
            Add New User
          </button>
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">User Id</th>
              <th scope="col">Full Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">District</th>
              <th scope="col">Village</th>
              <th scope="col">Address</th>
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
            {userlist.map((ob) => (
              <tr>
                <td>{ob.userId}</td>
                <td>{ob.firstName + " " + ob.lastName}</td>
                <td>{ob.username}</td>
                <td>{ob.phoneNumber}</td>
                <td>{ob.district}</td>
                <td>{ob.village}</td>
                <td>{ob.address}</td>
                <td>
                  <button
                    type="button"
                    name="btn"
                    id="delete"
                    className="btn btn-danger rounded-pill"
                    onClick={() => {
                      deleteUser(ob.userId);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link
                    to={`/users/edituser/${ob.userId}`}
                    state={{ userdata: ob }}
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
                  <Link to={`/users/viewusers/${ob.userId}`}>
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
export default AllUsers;
