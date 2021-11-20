import { FC, createContext, useState, useEffect } from "react";
import { IArena } from "../interfaces/IArena";
import { arenaService } from "../services/arenaService";
import { ArenaContextType } from "../types/ArenaContextType";

export const ArenaContext = createContext<ArenaContextType | null>(null);
export const ArenaProvider: FC = ({ children }) => {
  const [arenas, setArenas] = useState<IArena[]>([]);

  useEffect(() => {
    getArena();
  }, []);

  const getArena = async () => {
    const result = await arenaService.getAllArena();
    setArenas(result);
  };

  return (
    <ArenaContext.Provider value={{ arenas }}>{children}</ArenaContext.Provider>
  );
};
