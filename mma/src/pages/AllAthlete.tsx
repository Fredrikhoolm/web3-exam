import { FC } from "react";
import { Link } from "react-router-dom";
import AthleteList from "../components/athlete/AthleteList";

const AllAthlete: FC = () => {
  return (
    <section>
      <h3>Alle MMA utøvere</h3>
      <div>
        <Link to="/create-athlete"><button>Legg til ny utøver</button></Link>
      </div>
      <AthleteList />
    </section>
  );
};

export default AllAthlete;
