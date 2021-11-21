import { FC } from "react";
import { Link } from "react-router-dom";
import AthleteList from "../components/athlete/AthleteList";
import { Button } from "react-bootstrap"

const AllAthlete: FC = () => {
  return (
    <section>
      <h3>Alle MMA utøvere</h3>
      <div>
      <Link to={`/create-athlete`}><Button variant="primary"> Legg til Arena </Button></Link>
      </div>
      <AthleteList />
    </section>
  );
};

export default AllAthlete;
