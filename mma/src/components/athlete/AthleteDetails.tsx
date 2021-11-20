import { FC, useContext, useEffect, useState } from "react";
import { IAthlete } from "../../interfaces/IAthlete";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AthleteContext } from "../../contexts/AthleteContext";
import { AthleteContextType } from "../../types/AthleteContextType";
import AthleteItem from "./AthleteItem";
import AthleteList from "./AthleteList";

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

  return (
    <>
      <div>{athlete?.name}</div>
      <img
        src={`https://localhost:5001/images/${athlete?.image}`}
        alt={athlete?.image}
      />
    </>
  );
};

export default AthleteDetails;
