import { FC } from "react";
import { Container, Nav, Navbar, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/MainNavigation.css";
import logo from "../../assets/images/backyard-brawl.png";

const MainNavigation: FC = () => {
  return (
    <Navbar className="navbar shadow navbar-expand-lg navbar-black bg-light">
      <Container>
        <Nav>
          <Nav.Link className="fs-3 homestyle" as={Link} to="/">
            Hjem
          </Nav.Link>
        </Nav>
        <Navbar.Brand>
          <img src={logo} alt="logo"></img>
        </Navbar.Brand>

        <Nav>
          <Nav.Link className="fs-3" as={Link} to="/athletes">
            Utøvere
          </Nav.Link>

          <Nav.Link className="fs-3" as={Link} to="/arena">
            Arena
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
