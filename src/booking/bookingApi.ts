import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Room } from '../interfaces/booking/room'

export const bookingApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getRooms: builder.query<Room[],void>({
      query: () => 'room'
    }),
  }),
})

export const { useGetRoomsQuery } = bookingApi;