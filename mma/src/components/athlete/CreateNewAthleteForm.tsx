import { FC, ChangeEvent, useState } from "react";
import { athleteService } from "../../services/athleteService";
import { IAthlete } from "../../interfaces/IAthlete";

const CreateNewAthleteForm : FC = () => {   

    const [ newAthlete, setNewAthlete ] = useState<IAthlete>({name: "", image: "", age: "", nationality: "", record: "", style: "", division: "", nickname: ""});
    const [ newImage, setNewImage ] = useState<File>();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let { name } = event.target;        
        switch( name ){
            case "name":
                let { value } = event.target;
                setNewAthlete( { ...newAthlete, name: value } );
                break;
            case "image":
                let { files } = event.target;
                if( files ){
                    console.log( files[0] );
                    setNewAthlete( { ...newAthlete, image: files[0].name } );
                    setNewImage( files[0] );
                }
            break;
        }
    }
    const postNewAthlete = () => {
        console.log( newAthlete );
        console.log( newImage ); 
        athleteService.postNewAthlete(newAthlete, newImage as File);
    }

    
    return (
        <section>
            <div>
                <label>Navn</label>
                <input onChange={handleChange} name="name" type="text"/>
            </div>
            <div>
                <label>Alder</label>
                <input onChange={handleChange} name="age" type="text"/>
            </div>
            <div>
                <label>Velg bilde</label>
                <input onChange={handleChange} name="image" type="file"/>
            </div>
            <input onClick={postNewAthlete} type="button" value="Lagre ny utøver"/>
        </section>
    )
}

export default CreateNewAthleteForm;