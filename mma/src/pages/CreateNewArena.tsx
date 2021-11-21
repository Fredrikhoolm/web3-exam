import { FC } from "react";
import CreateNewArenaForm from "../components/arena/CreateNewArenaForm";

const CreateNewArena : FC = () => {
    return (
        <section>
            <h3>Lagre ny utøver</h3>
            <CreateNewArenaForm/>
        </section>
    )
}

export default CreateNewArena;