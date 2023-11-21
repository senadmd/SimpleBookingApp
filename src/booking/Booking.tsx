import { useEffect, useRef } from 'react';
import '../App.css'
import {  useAppSelector } from '../hooks';
import { useDispatch } from 'react-redux';
import{fetchRoomsAction} from './bookingSlice';
import{useGetRoomsQuery} from './bookingApi';

function Booking() {
    const dispatch = useDispatch();
    const username = useAppSelector(state => state.loginSlice.username);
    const { data } = useGetRoomsQuery();
    useEffect(() => {
        dispatch(fetchRoomsAction)
      },[dispatch]);
return (
    <>
<h1>Select room to book {username}</h1>
<div className="card">
</div>
</>)
}

export default Booking
