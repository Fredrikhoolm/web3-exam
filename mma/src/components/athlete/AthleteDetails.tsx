import { FC, useContext, useEffect, useState } from "react";
import { IAthlete } from "../../interfaces/IAthlete";
import {
  Card,
  Button,
  Col,
  Container,
  Row,
  ListGroupItem,
  ListGroup,
  Image,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AthleteContext } from "../../contexts/AthleteContext";
import { AthleteContextType } from "../../types/AthleteContextType";
import AthleteItem from "./AthleteItem";
import AthleteList from "./AthleteList";
import { athleteService } from "../../services/athleteService";

const AthleteDetails: FC = () => {
  const { id } = useParams();

  const { getAthletesById } = useContext(AthleteContext) as AthleteContextType;
  const [athlete, setAthlete] = useState<IAthlete>();

  useEffect(() => {
    if (id) {
      const _athlete = getAthletesById(id);
      setAthlete(_athlete);
    }
  }, []);

  const deleteAthlete = () => {
    return athleteService.deleteAthlete(id);
  };

  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <Row>
              <ListGroupItem>
                <h2 className="text-center mt-2">{athlete?.name}</h2>
                <h5 className="text-center mb-3">"{athlete?.nickname}"</h5>
              </ListGroupItem>
            </Row>

            <Row>
              <ListGroupItem className="fs-5">
                Alder: {athlete?.age}
              </ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem className="fs-5">
                Vektklasse: {athlete?.division}
              </ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem className="fs-5">
                Kampsportstil: {athlete?.style}
              </ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem className="fs-5">
                Kamphistorikk: {athlete?.record}
              </ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem className="fs-5">
                Nasjonalitet: {athlete?.nationality}
              </ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem className="fs-5">
                Hjemme
                <Link to={`/arena`}>arena:</Link> {"Arena"}
              </ListGroupItem>
            </Row>
          </ListGroup>
        </Col>
        <Col>
          <Image
            fluid
            src={`https://localhost:5001/images/${athlete?.image}`}
            alt={athlete?.image}
          />
        </Col>
      </Row>
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <Link
              className="d-grid gap-2 text-decoration-none"
              to={`/athletes`}
            >
              <Button variant="outline-dark" size="lg">
                {" "}
                Tilbake{" "}
              </Button>
            </Link>
          </Col>

          <Col>
            <Link
              className="d-grid gap-2 text-decoration-none"
              to={`/athletes`}
            >
              <Button variant="outline-dark" size="lg" onClick={deleteAthlete}>
                Slett utøver
              </Button>
            </Link>
          </Col>
          <Col>
            <Link
              className="d-grid gap-2 text-decoration-none"
              to={`/edit-athlete/${id}`}
            >
              <Button variant="outline-dark" size="lg">
                Endre utøver
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AthleteDetails;
