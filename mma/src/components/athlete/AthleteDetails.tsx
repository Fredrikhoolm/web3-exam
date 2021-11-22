import { FC, useContext, useEffect, useState } from "react";
import { IAthlete } from "../../interfaces/IAthlete";
import { Button, Col, Container, Row, ListGroupItem, ListGroup, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AthleteContext } from "../../contexts/AthleteContext";
import { AthleteContextType } from "../../types/AthleteContextType";
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
              <ListGroupItem className="shadow border-0 ">
                <h2 className=" border-0 text-center mt-4 ">{athlete?.name}</h2>
                <h5 className=" border-0 text-center mb-4">{athlete?.nickname}</h5>
              </ListGroupItem>
            </Row>

            <Row>
              <ListGroupItem className=" border-0 fs-4 shadow">
                Alder: {athlete?.age}
              </ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem className=" border-0 fs-4 shadow">
                Vektklasse: {athlete?.division}
              </ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem className=" border-0 fs-4 shadow">
                Kampsportstil: {athlete?.style}
              </ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem className=" border-0 fs-4 shadow">
                Kamphistorikk: {athlete?.record}
              </ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem className=" border-0 fs-4 shadow">
                Nasjonalitet: {athlete?.nationality}
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
              to={`/athletes`}>
              <Button variant="outline-dark" size="lg">
                Tilbake
              </Button>
            </Link>
          </Col>
          <Col>
            <Link
              className="d-grid gap-2 text-decoration-none"
              to={`/athletes`}>
              <Button variant="outline-dark" size="lg" onClick={deleteAthlete}>
                Slett utøver
              </Button>
            </Link>
          </Col>
          <Col>
            <Link
              className="d-grid gap-2 text-decoration-none"
              to={`/edit-athlete/${id}`}>
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
