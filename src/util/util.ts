import { BookingRequest } from "../interfaces/booking/bookingRequest";

export const createBookingRequest = (roomId:number, username:string) => {
    const d1 = new Date (),
    d2 = new Date ( d1 );
    d2.setMinutes ( d1.getMinutes() + 30 );

    return { roomId: roomId, dateFrom:d1, dateTo: d2, username: username } as BookingRequest
}