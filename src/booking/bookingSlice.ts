import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Room } from "../interfaces/booking/room";
import { bookingApi } from "./bookingApi";
import { BookingState } from "../interfaces/booking/bookingState";

const initialState:BookingState  = {
  availableRooms: [],
  bookedRooms: []
}

export const bookingSlice = createSlice({
    name: "roomsBookable",
    initialState: initialState,
    reducers: {
        setAvilableRooms:(state, action : PayloadAction<Room[]>)=>{
            state.availableRooms = action.payload
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addMatcher(bookingApi.endpoints.getRooms.matchFulfilled, (state, action:PayloadAction<Room[]| undefined>) => {
          // Add user to the state array
          state.availableRooms = action.payload??[]
        })
      }
});


export const {setAvilableRooms} = bookingSlice.actions;
export default bookingSlice.reducer;



