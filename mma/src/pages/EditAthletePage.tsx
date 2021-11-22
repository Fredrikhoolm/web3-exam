import { FC } from "react";
import EditAthlete from "../components/athlete/EditAthlete";

const EditAthletePage: FC = () => {
  return (
    <section>
      <h3 className="text-center mt-5 mb-5 fs-1">Endre utøver</h3>
      <EditAthlete />
    </section>
  );
};

export default EditAthletePage;
