import { FC, useContext, useEffect, useState } from "react";
import { Col, Container, Row, ListGroupItem, ListGroup, Image} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ArenaContext } from "../../contexts/ArenaContext";
import { ArenaContextType } from "../../types/ArenaContextType";
import { IArena } from "../../interfaces/IArena";

const ArenaDetails: FC = () => {
  const { id } = useParams();

  const { getArenasById } = useContext(ArenaContext) as ArenaContextType;
  const [ arena, setArena] = useState<IArena>();

  useEffect(() => {
    if (id) {
      const _arena = getArenasById(id);
      setArena(_arena);
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <Row>
              <h2>{arena?.name}</h2>
            </Row>
            <Row>
              <ListGroupItem> Kapasitet: {arena?.capacity}</ListGroupItem>
            </Row>
          </ListGroup>
        </Col>
        <Col>
          <Image
            fluid
            src={`https://localhost:5001/images/${arena?.image}`}
            alt={arena?.image}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ArenaDetails;