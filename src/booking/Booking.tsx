import '../App.css'
import {  useAppSelector } from '../hooks';
import { renderEquipment } from '../util/presentationUtil';
import { useGetRoomsQuery } from './bookingApi';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Booking() {
    const username = useAppSelector(state => state.loginSlice.username);
    const { data, isError, isLoading, isFetching } = useGetRoomsQuery();
    const roomInfo = data?.map( x=> (
        <div className="card" key={x.id}>
            <h3>{x.name}</h3>
            <b>Equipment</b>{renderEquipment(x.equipment)}
            <button>Book room for 30 min</button>
        </div>
    ))
    return (isError ? (
        <div>Sorry there was some connection issues, check that API is running</div>
    ) : isLoading && isFetching ? (
        <div>
            <AiOutlineLoading3Quarters className="spinner" />
        </div>
    ) : data ? (
        <>
            <h1>Select room to book {username}</h1>
            {roomInfo}
        </>) : null)
}

export default Booking
