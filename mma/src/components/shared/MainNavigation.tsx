import { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/MainNavigation.css";
import logo from "../../assets/images/backyard-brawl.png";

const MainNavigation: FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Backyard Brawl</Navbar.Brand>
        <Navbar.Brand>
          <img src={logo} alt="logo"></img>
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            Hjem
          </Nav.Link>
          <Nav.Link as={Link} to="/athletes">
            Utøvere
          </Nav.Link>
          <Nav.Link as={Link} to="/arena">
            Arena
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
