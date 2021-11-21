import { FC, ChangeEvent, useState } from "react";
import { arenaService } from "../../services/arenaService";
import { IArena } from "../../interfaces/IArena";

const CreateNewArenaForm : FC = () => {   

    const [ newArena, setNewArena ] = useState<IArena>({name: "", image: "", capacity: ""});
    const [ newImage, setNewImage ] = useState<File>();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let { name } = event.target;        
        switch( name ){
            case "name":
                let { value } = event.target;
                setNewArena( { ...newArena, name: value } );
                break;
                
            case "image":
                let { files } = event.target;
                if( files ){
                    console.log( files[0] );
                    setNewArena( { ...newArena, image: files[0].name } );
                    setNewImage( files[0] );
                }
            break;

            
        }
    }
    const postNewAthlete = () => {
        console.log( newArena );
        console.log( newImage ); 
        arenaService.postNewArena(newArena, newImage as File);
    }

    
    return (
        <section>
            <div>
                <label>Navn</label>
                <input onChange={handleChange} name="name" type="text"/>
            </div>
            <div>
                <label>Velg bilde</label>
                <input onChange={handleChange} name="image" type="file"/>
            </div>
            <input onClick={postNewAthlete} type="button" value="Lagre ny utøver"/>
        </section>
    )
}

export default CreateNewArenaForm;