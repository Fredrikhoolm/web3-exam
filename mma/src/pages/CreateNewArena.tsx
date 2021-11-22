import { FC } from "react";
import CreateNewArenaForm from "../components/arena/CreateNewArenaForm";

const CreateNewArena: FC = () => {
  return (
    <section>
      <h3 className="text-center mt-4 mb-4 fs-2">Lagre ny Arena</h3>
      <CreateNewArenaForm />
    </section>
  );
};

export default CreateNewArena;
