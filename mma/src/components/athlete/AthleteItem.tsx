import { FC } from "react";
import { IAthlete } from "../../interfaces/IAthlete";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/AthleteItem.css";

const AthleteItem: FC<IAthlete> = ({
  id,
  name,
  image,
  age,
  nationality,
  record,
  style,
  division,
  nickname,
}) => {
  return (
    <Card className="border-2 shadow" style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={`https://localhost:5001/images/${image}`}
        alt={name}
      ></Card.Img>
      <Card.Body>
        <Card.Title id="athlete-divison" className="text-center">
          {division}
        </Card.Title>
        <Card.Title id="athlete-name" className="text-center">
          {name}
        </Card.Title>
        <Card.Text id="athlete-nickname" className="text-center">
          {nickname}
        </Card.Text>
        <Link
          className="d-grid gap-2 text-decoration-none"
          to={`/athletes-details/${id}`}
        >
          <Button variant="outline-dark">Les mer om {name}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default AthleteItem;
