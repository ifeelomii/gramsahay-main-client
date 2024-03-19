import "./HeroSection.css";
const { Link } = require("react-router-dom");

const HeroSection = () => {
  return (
    <>
      <div className="hero-section-container">
        <section className="section section-bio">
          <div className="container grid grid-two-column">
            <div className="bio-image">
              <img src="/images/complaint.png" alt="bio data" height={500} />
            </div>
            <div className="bio-data">
              <h2 className="common-heading">GramSahay</h2>
              <br></br>
              <p>
                GramSahay is an online grievance redressal portal aimed at
                facilitating the resolution of issues and complaints raised by
                the residents of rural areas. The platform serves as a bridge
                between the village people and the local administration,
                particularly the Gramsevak, to address their concerns
                effectively.
              </p>
              <p>
                At GramSahay, villagers can register their complaints regarding
                various issues such as infrastructure, public services, health,
                education, agriculture, and more. These complaints are then
                routed to the respective Gramsevak responsible for the area.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
