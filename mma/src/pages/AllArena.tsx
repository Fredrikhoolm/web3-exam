import { FC } from "react";
import ArenaList from "../components/arena/ArenaList";
import { ArenaProvider } from "../contexts/ArenaContext";


const AllArena: FC = () => {
  return (
    <section>
      <h3>Alle Arenaer</h3>
      <div className="container">
        <input
          type="search"
          value="Søk etter arena"
          className="input"
          placeholder="Filter"
        ></input>
      </div>
      <ArenaProvider>
        <ArenaList />
      </ArenaProvider>
    </section>
  );
};

export default AllArena;