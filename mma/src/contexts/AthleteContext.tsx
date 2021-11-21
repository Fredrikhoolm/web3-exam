import { FC, createContext, useState, useEffect } from "react";
import { IAthlete } from "../interfaces/IAthlete";
import { athleteService } from "../services/athleteService";
import { AthleteContextType } from "../types/AthleteContextType";

export const AthleteContext = createContext<AthleteContextType | null>(null);
export const AthleteProvider: FC = ({ children }) => {
  const [athletes, setAthletes] = useState<IAthlete[]>([]);

  useEffect(() => {
    getAthletes();
  }, [athletes]);

  const getAthletes = async () => {
    const result = await athleteService.getAllAthletes();
    setAthletes(result);
  };

  useEffect(() => {
    getAthletesById("");
  }, []);

  const getAthletesById = (id: string) => {
    return athletes.find((athlete) => athlete.id === id) as IAthlete;
  };

  const editAthlete () => {
    athleteService.editAthlete(id, athletes)
  }

  return (
    <AthleteContext.Provider value={{ athletes, getAthletesById, editAthlete }}>
      {children}
    </AthleteContext.Provider>
  );
};
