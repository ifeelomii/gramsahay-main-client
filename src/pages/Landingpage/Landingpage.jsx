import Banner from "../../components/Banner/Banner";
import Counter from "../../components/Counter/Counter";
import HeroSection from "../../components/HeroSection/HeroSection";

const Landingpage = () => {
  return (
    <>
      <div className="container" style={{ display: "block" }}>
        <Banner />
        <div className="line" style={{ marginTop: 50, marginBottom: 50 }}></div>
        <HeroSection/>
        <div className="line" style={{ marginTop: 50, marginBottom: 50 }}></div>
        <Counter/>
        <div className="line" style={{ marginTop: 50, marginBottom: 50 }}></div>
        {/* <Feedback/> */}
      </div>
    </>
  );
};

export default Landingpage;
