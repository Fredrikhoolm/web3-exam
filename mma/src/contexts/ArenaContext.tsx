import { FC, createContext, useState, useEffect } from "react";
import { IArena } from "../interfaces/IArena";
import { arenaService } from "../services/arenaService";
import { ArenaContextType } from "../types/ArenaContextType";

export const ArenaContext = createContext <ArenaContextType | null> (null);
export const ArenaProvider: FC = ({ children }) => {
  const [arenas, setArenas] = useState<IArena[]>([]);

  useEffect(() => {
    getArenas();
  }, []);

  const getArenas = async () => {
    const result = await arenaService.getAllArenas();
    setArenas(result);
  };

  useEffect(() => {
    getArenasById("");
  }, []);

  const getArenasById = (id: string) => {
    return arenas.find((arena) => arena.id === id) as IArena;
  };

  return (
    <ArenaContext.Provider value={{ arenas, getArenasById }}>
      {children}
    </ArenaContext.Provider>
  );
};