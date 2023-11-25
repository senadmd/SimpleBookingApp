import '../App.css'
import { useAppSelector } from '../hooks';
import { renderEquipment } from '../util/presentationUtil';
import BookRoomButton from './BookRoomButton';
import { useGetRoomsQuery } from './bookingApi';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Booking() {
    const username = useAppSelector(state => state.loginSlice.username);
    const { data, isError, isLoading, isFetching } = useGetRoomsQuery();

    const roomInfo = data?.map(x => (
        <div className="card" key={x.id}>
            <h3>{x.name}</h3>
            <b>Equipment</b>{renderEquipment(x.equipment)}
            <BookRoomButton roomId={x.id} />
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
            {roomInfo}
        </>) : (
            <h1>No rooms available at the moment</h1>
    );
}

export default Booking
