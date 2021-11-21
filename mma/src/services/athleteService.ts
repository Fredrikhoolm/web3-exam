import axios from "axios";
import { IAthlete } from "../interfaces/IAthlete";

export const athleteService = (function () {

  const UrlToAthleteController = "https://localhost:5001/MmaAthlete";
  const urlToImageUploadController = "https://localhost:5001/ImageUpload/SaveImage";

  const getAllAthletes = async () => {
    const result = await axios.get(UrlToAthleteController);
    return result.data as IAthlete[];
  };

  const postNewAthlete = (newAthlete: IAthlete, image: File) =>{
    let formData = new FormData();
    formData.append("file", image);
    axios.post(UrlToAthleteController, newAthlete);
    axios({
      url: urlToImageUploadController,
      method: "POST",
      data: formData,
      headers: {"Content-type" : "multipart/form-data"}
    })
  };

  const getOneAthlete = async () => {
    const result = await axios.get(UrlToAthleteController);
    return result.data
  }

  return {
    getAllAthletes,
    postNewAthlete,
    getOneAthlete
    
  };
})();
