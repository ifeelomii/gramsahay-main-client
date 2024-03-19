import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Brandbar.css";

const Brandbar=()=> {
  return (
    <>
        <Navbar id="contain">
          <Container>
            <Navbar.Brand href="#home">
              <h5>An Online Grievance Redressal Portal</h5>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div id="line"></div>
    </>
  );
}

export default Brandbar;    