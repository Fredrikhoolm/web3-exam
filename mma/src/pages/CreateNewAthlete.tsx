import { FC } from "react";
import CreateNewAthleteForm from "../components/athlete/CreateNewAthleteForm";

const CreateNewAthlete: FC = () => {
  return (
    <section>
      <h3 className="text-center mt-4 mb-4 fs-2">Lagre ny utøver</h3>
      <CreateNewAthleteForm />
    </section>
  );
};

export default CreateNewAthlete;
