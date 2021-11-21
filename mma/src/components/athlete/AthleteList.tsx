import { FC, useContext } from "react";
import { IAthlete } from "../../interfaces/IAthlete";
import AthleteItem from "./AthleteItem";
import { Container, Col, Row } from "react-bootstrap";
import { AthleteContext } from "../../contexts/AthleteContext";
import { AthleteContextType } from "../../types/AthleteContextType";

const AthleteList: FC = () => {

  const { athletes } = useContext(AthleteContext) as AthleteContextType;

  const createAthleteList = () => {
    return athletes.map((athlete: IAthlete, key: number) => {
      return (
        <Col key={key}>
          <AthleteItem
            id={athlete.id}
            name={athlete.name}
            // eslint-disable-next-line react/style-prop-object
            image={athlete.image} age={""} nationality={""} record={""} style={""} division={""} nickname={athlete.nickname}          />
        </Col>
      );
    });
  };

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {createAthleteList()}
      </Row>
    </Container>
  );
};

export default AthleteList;
