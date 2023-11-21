import { User } from "./user";

export interface LoginState extends User{
    isLoggedIn:boolean
}