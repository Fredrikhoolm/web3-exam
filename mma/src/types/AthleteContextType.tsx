import { IAthlete } from "../interfaces/IAthlete";

export type AthleteContextType = {
  athletes: IAthlete[];
  getAthletesById: (id: string) => IAthlete;
  editAthlete: (id: any, athletes: IAthlete) => void;
};
