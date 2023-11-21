import { Room } from "./room";
import { User } from "../login/user";

export interface BookedRoom extends Room {
    bookedUser: User,
    dateFrom: Date,
    dateTo: Date
}