import { Room } from "./room";

export interface BookingState {
    availableRooms:Room[],
    bookedRooms:Room[],
}