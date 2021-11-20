import { FC } from "react";
import { IAthlete } from "../../interfaces/IAthlete";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AthleteItem: FC<IAthlete> = ({ id, name, image, age, nationality, record, style, division, nickname  }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={`https://localhost:5001/images/${image}`}
        alt={name}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{nickname}</Card.Text>
        <Link to={`/athletes-details/${id}`}><Button variant="primary">Les mer om {name}</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default AthleteItem;
