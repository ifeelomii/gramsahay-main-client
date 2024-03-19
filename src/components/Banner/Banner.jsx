import { Link } from "react-router-dom";
import "./Banner.css"
const Banner = () => {
    return (
      <>
        <section className="banner">
          <div className="outer">
            <div className="banner-content">
              <h1>
                GramSahay
              </h1>
              <p>
                <span id="span-2">An Online Grievance Redressal Portal</span>
              </p>
              <Link to="/about" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </>
    );
}
export default Banner;