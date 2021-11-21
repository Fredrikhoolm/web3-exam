import { FC } from "react";
import ArenaList from "../components/arena/ArenaList";
import { ArenaProvider } from "../contexts/ArenaContext";
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"


const AllArena: FC = () => {
  return (
    <section>
      <h3>Alle Arenaer</h3>
      <div className="container">
      <div>
      <Link to={`/create-arena`}><Button variant="primary" > Legg til Arena </Button></Link>
      </div>
      </div>
      <ArenaProvider>
        <ArenaList />
      </ArenaProvider>
    </section>
  );
};

export default AllArena;