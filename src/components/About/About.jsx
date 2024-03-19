import React from "react";
import "./Aboutpage.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-page-container">
        <h3>About GramSahay</h3>
        <p>
          GramSahay is an online grievance redressal portal aimed at
          facilitating the resolution of issues and complaints raised by the
          residents of rural areas. The platform serves as a bridge between the
          village people and the local administration, particularly the
          Gramsevak, to address their concerns effectively.
        </p>
        <p>
          At GramSahay, villagers can register their complaints regarding
          various issues such as infrastructure, public services, health,
          education, agriculture, and more. These complaints are then routed to
          the respective Gramsevak responsible for the area.
        </p>
        <p>
          Gramsevaks, who are designated government officials responsible for
          the administration of rural areas, receive the complaints and work
          towards resolving them in a timely manner. They coordinate with
          relevant authorities and stakeholders to ensure that the grievances
          are addressed satisfactorily.
        </p>
        <p>
          At GramSahay, our mission is to empower rural communities by providing
          them with a platform to voice their concerns and improve their living
          conditions. By facilitating communication and collaboration between
          villagers and local authorities, we aim to foster transparency,
          accountability, and inclusive development in rural India.
        </p>
        <h3>Key features of GramSahay:</h3>
        <ul id="list">
          <li>Simple complaint registration process for villagers</li>
          <li>Efficient complaint management system for Gramsevaks</li>
          <li>Real-time status updates on complaint resolution</li>
          <li>Transparent communication between villagers and authorities</li>
          <li>Data-driven insights for informed decision-making</li>
        </ul>
        <p>
          GramSahay has already made significant strides in improving the lives
          of rural communities across India. By providing a platform for
          citizens to voice their concerns and enabling local authorities to
          address them promptly, we have seen positive changes in
          infrastructure, healthcare, education, and overall quality of life in
          many villages.
        </p>
        <p>
          Looking ahead, we are committed to further expanding the reach and
          impact of GramSahay. Our goal is to empower even more rural
          communities, leverage technology to streamline grievance redressal
          processes, and work closely with government agencies and non-profit
          organizations to drive sustainable development initiatives.
        </p>
        <h3>Why Choose GramSahay?</h3>
        <div className="feature">
          <h5>Empowering Rural Communities</h5>
          <p>
            GramSahay provides a voice to villagers, enabling them to raise
            concerns and participate in the development process.
          </p>
        </div>
        <div className="feature">
          <h5>Efficient Grievance Redressal</h5>
          <p>
            Our platform ensures that complaints are efficiently managed and
            resolved by local authorities, promoting accountability and
            transparency.
          </p>
        </div>
        <div className="feature">
          <h5>Real-time Updates</h5>
          <p>
            Villagers can track the status of their complaints in real-time,
            ensuring timely resolution and peace of mind.
          </p>
        </div>
        <div className="feature">
          <h5>Data-driven Insights</h5>
          <p>
            GramSahay leverages data analytics to provide actionable insights
            for decision-makers, enabling informed and effective governance.
          </p>
        </div>
        <p>
          Thank you for joining us on this journey towards a brighter future for
          rural India!
        </p>
      </div>
    </div>
  );
};

export default About;
