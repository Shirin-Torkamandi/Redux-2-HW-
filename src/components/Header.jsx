import Container from "react-bootstrap/Container";
// import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
const Header = () => {
  return (
    <section style={{ position: "relative" }}>
      <header style={{ position: "absolute", top: "8px" }}>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="APS icon"
                src="/APSDark.png"
                width="70"
                height="40"
              />
              Simply Natural
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <Image
        src="/hero-bg.jpg"
        width="100%"
        style={{
          borderBottomLeftRadius: "75px",
          borderBottomRightRadius: "75px",
        }}
      />
      ;
    </section>
  );
};

export default Header;
