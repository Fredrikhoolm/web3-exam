import { FC } from "react";
import AthleteDetails from "../components/athlete/AthleteDetails";

const AthleteDetailsPage: FC = () => {
  return (
    <section>
      <h3 className="text-center mt-5 mb-5 fs-1">Generell informasjon</h3>
      <AthleteDetails />
    </section>
  );
};

export default AthleteDetailsPage;
