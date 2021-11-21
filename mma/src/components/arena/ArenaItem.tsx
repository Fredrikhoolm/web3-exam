import { FC } from "react";
import { IArena } from "../../interfaces/IArena";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArenaItem: FC<IArena> = ({ id, name, image, capacity }) => {
  return (
    <Card className="border-2 shadow" style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={`https://localhost:5001/images/${image}`}
        alt={name}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Kapasitet: {capacity} </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArenaItem;
