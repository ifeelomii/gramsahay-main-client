import { useEffect, useState } from "react";
import FeedbackService from "../../services/FeedbackService";
import { Link, useParams } from "react-router-dom";

const AllFeedbacks = () => {
  const [feedbacklist, setFeedbackList] = useState([]);
  const fetchdata = () => {
    FeedbackService.getAllFeedbacks()
      .then((result) => {
        console.log(result.data);
        setFeedbackList([...result.data]);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="display-admin-wrapper">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Feedback Id</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email Id</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
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
            {feedbacklist.map((ob) => (
              <tr>
                <td>{ob.fId}</td>
                <td>{ob.firstName + " " + ob.lastName}</td>
                <td>{ob.emailId}</td>
                <td>{ob.subject}</td>
                <td>{ob.yourMessage}</td>
                <td>
                  <Link to={`/feedback/viewfeedback/${ob.fId}`}>
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
export default AllFeedbacks;
