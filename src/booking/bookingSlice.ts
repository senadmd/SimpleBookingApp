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
        builder.addMatcher(bookingApi.endpoints.getRooms.matchFulfilled, (state, action) => {
          // Add user to the state array
          state.availableRooms = action.payload??[]
        }),
        builder.addMatcher(bookingApi.endpoints.bookRoom.matchFulfilled, (state, action) => {
          // Add user to the state array
          state.availableRooms = state.availableRooms.filter(x=> x.id != action.meta.arg.originalArgs.roomId)
          state.bookedRooms = state.bookedRooms.concat(action.meta.arg.originalArgs)
        })
      }
});


export const {setAvilableRooms} = bookingSlice.actions;
export default bookingSlice.reducer;



