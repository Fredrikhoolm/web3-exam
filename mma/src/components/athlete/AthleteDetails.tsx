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
    return athleteService.deleteAthlete(id)
  }

  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <Row>
              <h2>{athlete?.name}</h2>
            </Row>
            <Row>
              <h5>"{athlete?.nickname}"</h5>
            </Row>
            <Row>
              <ListGroupItem>Alder: {athlete?.age}</ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem>Vektklasse: {athlete?.division}</ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem>Kampsportstil: {athlete?.style}</ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem>Kamphistorikk: {athlete?.record}</ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem>
                Nasjonalitet: {athlete?.nationality}
              </ListGroupItem>
            </Row>
            <Row>
              <ListGroupItem>
                Hjemmearena: {"Arena"}
                <Link to={`/arena`}>{"(Les mer om arenaer her)"}</Link>
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
      <Col>
      <Row>
        <Link to={`/athletes`}><Button onClick={deleteAthlete}>Slett utøver</Button></Link>
      </Row>
      </Col>
    </Container>
  );
};

export default AthleteDetails;
