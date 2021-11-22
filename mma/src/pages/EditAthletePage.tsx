import { FC } from "react";
import EditAthlete from "../components/athlete/EditAthlete";

const EditAthletePage: FC = () => {
  return (
    <section>
      <h3>Lagre ny utøver</h3>
      <EditAthlete />
    </section>
  );
};

export default EditAthletePage;
