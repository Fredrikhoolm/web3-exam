import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AthleteDetails from "../components/athlete/AthleteDetails";
import AthleteItem from "../components/athlete/AthleteItem";
import { IAthlete } from "../interfaces/IAthlete";

const AthleteDetailsPage: FC = () => {
  return (
    <section>
      <h3>Generell informasjon</h3>
      <AthleteDetails />
    </section>
  );
};

export default AthleteDetailsPage;
