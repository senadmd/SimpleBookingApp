import { Equipment } from "./equipment";

export interface Room {
    id: number,
    equipment: Equipment[],
    name: string
}