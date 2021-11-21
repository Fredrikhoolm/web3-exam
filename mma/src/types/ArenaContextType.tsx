import { IArena } from "../interfaces/IArena"

export type ArenaContextType = {
    arenas: IArena[];
    getArenasById: (id: string) => IArena;
}