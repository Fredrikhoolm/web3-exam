import axios from "axios";
import { IAthlete } from "../interfaces/IAthlete";

export const athleteService = (function () {
  const UrlToAthleteController = "https://localhost:5001/MmaAthlete";

  const getAllAthletes = async () => {
    const result = await axios.get(UrlToAthleteController);
    return result.data as IAthlete[];
  };

  const getOneAthlete = async () => {
    const result = await axios.get(UrlToAthleteController);
    return result.data
  }

  return {
    getAllAthletes,
    getOneAthlete
  };
})();
