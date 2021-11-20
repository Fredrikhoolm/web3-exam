import axios from "axios";
import { IArena } from "../interfaces/IArena";

export const arenaService = (function () {
  const UrlToArenaController = "https://localhost:5001/MmaArena";

  const getAllArena = async () => {
    const result = await axios.get(UrlToArenaController);
    return result.data as IArena[];
  };

  const getOneArena = async () => {
    const result = await axios.get(UrlToArenaController);
    return result.data;
  };

  return {
    getAllArena,
    getOneArena,
  };
})();
