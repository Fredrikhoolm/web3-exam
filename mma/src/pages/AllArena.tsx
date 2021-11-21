import { FC } from "react";
import ArenaList from "../components/arena/ArenaList";
import { ArenaProvider } from "../contexts/ArenaContext";
import { Link } from "react-router-dom"


const AllArena: FC = () => {
  return (
    <section>
      <h3>Alle Arenaer</h3>
      <div className="container">
      <div>
        <Link to="/create-arena"><button>Legg til ny Arena</button></Link>
      </div>
      </div>
      <ArenaProvider>
        <ArenaList />
      </ArenaProvider>
    </section>
  );
};

export default AllArena;