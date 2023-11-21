import {  PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginState } from "../interfaces/login/loginState";

const initialState : LoginState = {
    username: "",
    isLoggedIn: false
}

export const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        loginUser:(state, action : PayloadAction<string>)=>{
            state.username = action.payload,
            state.isLoggedIn = true
        },
        logOut:(state)=>{
            state.username = "",
            state.isLoggedIn = true
        }
    }
});


export const {loginUser, logOut} = loginSlice.actions;
export default loginSlice.reducer;
