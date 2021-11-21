import axios from "axios";
import { IArena } from "../interfaces/IArena";

export const arenaService = (function () {
  
  const UrlToArenaController = "https://localhost:5001/MmaArena";
  const urlToImageUploadController = "https://localhost:5001/ImageUpload/SaveImage";

  const getAllArenas = async () => {
    const result = await axios.get(UrlToArenaController);
    return result.data as IArena[];
  };

  const postNewArena= (newArena: IArena, image: File) =>{
    let formData = new FormData();
    formData.append("file", image);
    axios.post(UrlToArenaController, newArena);
    axios({
      url: urlToImageUploadController,
      method: "POST",
      data: formData,
      headers: {"Content-type" : "multipart/form-data"}
    })
  };

  const getOneArena = async () => {
    const result = await axios.get(UrlToArenaController);
    return result.data
  }

  return {
    getAllArenas,
    getOneArena,
    postNewArena
  };
})();
