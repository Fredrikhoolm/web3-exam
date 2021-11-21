import { FC } from "react";
import { Link } from "react-router-dom";
import AthleteList from "../components/athlete/AthleteList";
import { Button, Col, Row } from "react-bootstrap";

const AllAthlete: FC = () => {
  return (
    <section>
      <h3 id="" className="text-center mt-5 mb-5 fs-1">
        Alle MMA utøvere
      </h3>
      <div></div>
      <AthleteList />
      <Row>
        <Col></Col>
        <Col>
          <Link
            className="d-grid gap-2 text-decoration-none mt-4"
            to={`/create-athlete`}
          >
            <Button variant="outline-dark mb-5 mt-5" size="lg">
              {" "}
              Legg til utøvere
            </Button>
          </Link>
        </Col>
        <Col></Col>
      </Row>
    </section>
  );
};

export default AllAthlete;
