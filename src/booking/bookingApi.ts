import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Room } from '../interfaces/booking/room'
import { BookingRequest } from '../interfaces/booking/bookingRequest';

export const bookingApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getRooms: builder.query<Room[],void>({
      query: () => 'room'
    }),
    bookRoom: builder.mutation<BookingRequest, BookingRequest>({
      query: (body) => ({
        url: 'booking',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetRoomsQuery } = bookingApi;