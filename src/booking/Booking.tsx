import '../App.css'
import { useAppSelector } from '../hooks';
import { renderEquipment } from '../util/presentationUtil';
import BookRoomButton from './BookRoomButton';
import { useGetRoomsQuery } from './bookingApi';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Booking() {
    const username = useAppSelector(state => state.loginSlice.username);
    const bookedRooms = useAppSelector(state => state.bookingSlice.bookedRooms);
    const { data, isError, isLoading, isFetching } = useGetRoomsQuery();

    const roomInfo = data?.map(x => (
        <div className="card" key={x.id}>
            <h3>{x.name}</h3>
            <b>Equipment</b>{renderEquipment(x.equipment)}
            <BookRoomButton roomId={x.id} />
        </div>
    ));

    const bookingInfo = data && bookedRooms.map(x => (
        <div key={x.dateFrom.toTimeString() + x.roomId.toString()}>
            <h3>{data.filter(z => z.id == x.roomId)[0].name}</h3>
            <b>Booked time:</b>{x.dateFrom.toLocaleTimeString()}-{x.dateTo.toLocaleTimeString()}
        </div>
    ));

    if (isError) {
        return (<div>Sorry there was some connection issues, check that API is running</div>);
    }

    if (isLoading && isFetching) {
        return (<div>
            <AiOutlineLoading3Quarters className="spinner" />
        </div>);
    }

    return (data) ? (
        <>
            <h1>Select room to book {username}</h1>
            <div className="card">
                <h2>Recently booked rooms</h2>
                {(bookingInfo && bookingInfo.length) ? bookingInfo : (<span>No booked rooms recently</span>)}
            </div>
            {roomInfo}
        </>) :
        (
            <h1>No rooms available at the moment</h1>
        );
}

export default Booking
