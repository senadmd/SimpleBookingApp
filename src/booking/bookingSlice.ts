import { Action, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Room } from "../interfaces/booking/room";
import { Booking } from "../interfaces/booking/booking";
import { useGetRoomsQuery } from "./bookingApi";

const initialState : Booking = {
    availbleRooms: [],
    bookedRooms: []
}

export const fetchRoomsAction :Action= {type:'getRooms'};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchAvailableRooms = createAsyncThunk<Room[]|undefined, void>(fetchRoomsAction.type,
    async (_) => {
      const response = await useGetRoomsQuery()
      return response.data
    }
  )

export const bookingSlice = createSlice({
    name: "roomsBookable",
    initialState: initialState,
    reducers: {
        setAvilableRooms:(state, action : PayloadAction<Room[]>)=>{
            state.availbleRooms = action.payload
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchAvailableRooms.fulfilled, (state, action:PayloadAction<Room[]| undefined>) => {
          // Add user to the state array
          state.availbleRooms = action.payload??[]
        })
      }
});


export const {setAvilableRooms} = bookingSlice.actions;
export default bookingSlice.reducer;



