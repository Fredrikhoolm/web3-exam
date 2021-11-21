import { FC } from "react";
import ArenaList from "../components/arena/ArenaList";
import { ArenaProvider } from "../contexts/ArenaContext";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

const AllArena: FC = () => {
  return (
    <section>
      <h3 className="text-center mt-5 mb-5 fs-1">Alle Arenaer</h3>
      <div className="container"></div>
      <ArenaProvider>
        <ArenaList />
      </ArenaProvider>

      <Row>
        <Col></Col>
        <Col>
          <Link
            className="d-grid gap-2 text-decoration-none mt-5 mb-5"
            to={`/create-arena`}
          >
            <Button variant="outline-dark" size="lg">
              {" "}
              Legg til Arena{" "}
            </Button>
          </Link>
        </Col>
        <Col></Col>
      </Row>
    </section>
  );
};

export default AllArena;
