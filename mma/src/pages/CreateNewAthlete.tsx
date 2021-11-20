import { FC } from "react";
import CreateNewAthleteForm from "../components/athlete/CreateNewAthleteForm";

const CreateNewAthlete : FC = () => {
    return (
        <section>
            <h3>Lagre ny utøver</h3>
            <CreateNewAthleteForm/>
        </section>
    )
}

export default CreateNewAthlete;