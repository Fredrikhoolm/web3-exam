import { FC, useContext } from "react";
import { IArena } from "../../interfaces/IArena";
import ArenaItem from "./ArenaItem";
import { Container, Col, Row } from "react-bootstrap";
import { ArenaContext } from "../../contexts/ArenaContext";
import { ArenaContextType } from "../../types/ArenaContextType";

const ArenaList: FC = () => {
  const { arenas } = useContext(ArenaContext) as ArenaContextType;

  const createArenaList = () => {
    return arenas.map((arena: IArena, key: number) => {
      return (
        <Col key={key}>
          <ArenaItem
            name={arena.name}
            image={arena.image}
            capacity={arena.capacity}
          />
        </Col>
      );
    });
  };

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {createArenaList()}
      </Row>
    </Container>
  );
};

export default ArenaList;