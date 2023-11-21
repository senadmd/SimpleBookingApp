import { BookedRoom } from "./bookedRoom";
import { Room } from "./room";

export interface Booking {
    availbleRooms: Room[],
    bookedRooms: BookedRoom[],
}