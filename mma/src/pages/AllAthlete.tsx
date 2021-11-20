import { FC } from "react";
import AthleteList from "../components/athlete/AthleteList";

const AllAthlete: FC = () => {
  return (
    <section>
      <h3>Alle MMA utøvere</h3>
      <AthleteList />
    </section>
  );
};

export default AllAthlete;
