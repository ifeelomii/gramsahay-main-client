import React, { useEffect, useState } from 'react';
import './Counter.css'
import ComplaintService from '../../services/ComplaintService';
const Counter = () => {
  var newcomp;
  var ipcomp;
  var completedcomp;
  const [newc, setNewc] = useState(0);
  const [ip, setIP] = useState(0);
  const [comp, setComp] = useState(0);

  // GET NEW COMPLAINTS COUNT
  const fetchNew = async () => {
    // console.log("new");
    try {
      ComplaintService.getComplaintCount("new")
        .then((result) => {
          //   console.log(result);
          newcomp = result.data;
          setNewc(newcomp);
        })
        .catch((err) => {
          console.log("error occured", err);
        });
    } catch (error) {
      console.error("Error fetching Gramsevak data:", error);
    }
  };

  // GET IN-PROCESS COMPLAINTS COUNT
  const fetchInProcess = async () => {
    // console.log("ip");
    try {
      ComplaintService.getComplaintCount("inprocess")
        .then((result) => {
          ipcomp = result.data;
          setIP(ipcomp);
        })
        .catch((err) => {
          console.log("error occured", err);
        });
    } catch (error) {
      console.error("Error fetching Gramsevak data:", error);
    }
  };

  // GET COMPLETED COMPLAINTS COUNT
  const fetchCompleted = async () => {
    // console.log("completed");
    try {
      ComplaintService.getComplaintCount("completed")
        .then((result) => {
          completedcomp = result.data;
          setComp(completedcomp);
        })
        .catch((err) => {
          console.log("error occured", err);
        });
    } catch (error) {
      console.error("Error fetching Gramsevak data:", error);
    }
  };
  useEffect(() => {
    fetchNew();
    fetchInProcess();
    fetchCompleted();
  }, []);

  return (
    <>
      <section className="section section-work-data">
        <div className="section-container grid grid-four-column">
          <div>
            <h2 className="counter-numbers" data-number="1000">
              {comp+ip+newc}
            </h2>
            <p>Total Complaints</p>
          </div>
          <div>
            <h2 className="counter-numbers" data-number="1000">
              {comp}
            </h2>
            <p>Completed Complaints</p>
          </div>
          <div>
            <h2 className="counter-numbers" data-number="2000">
              {ip}
            </h2>
            <p>In-Process Complaints</p>
          </div>
          <div>
            <h2 className="counter-numbers" data-number="3000">
              {newc}
            </h2>
            <p>New Complaints</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
