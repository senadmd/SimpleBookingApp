import { BookingRequest } from "./bookingRequest";
import { Room } from "./room";

export interface BookingState {
    availableRooms:Room[],
    bookedRooms:BookingRequest[],
}