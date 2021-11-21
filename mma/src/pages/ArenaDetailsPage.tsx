import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ArenaDetails from "../components/arena/ArenaDetails";
import AthleteItem from "../components/athlete/AthleteItem";
import { IAthlete } from "../interfaces/IAthlete";

const ArenaDetailsPage: FC = () => {
  return (
    <section>
      <h3>Arena informasjon</h3>
      <ArenaDetails />
    </section>
  );
};

export default ArenaDetailsPage;
