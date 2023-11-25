import '../App.css'
import {  useAppSelector } from '../hooks';
import { useBookRoomMutation } from './bookingApi';
import { createBookingRequest } from '../util/util';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function BookRoomButton({ roomId }: { roomId: number }) {
    const username = useAppSelector(state => state.loginSlice.username);
    const [
        bookRoom,
        { isLoading: isUpdating , isError, isSuccess}, 
      ] = useBookRoomMutation()
    
    if (isError){
        return (<span>Could not book your room, perhaps its already booked.</span>);
    }

    if (isUpdating){
        return (<div>
            <AiOutlineLoading3Quarters className="spinner" />
        </div>);
    }
    
    return (!isSuccess)? 
    (<button onClick={() => bookRoom(createBookingRequest(roomId,username))}>Book room for 30 min</button>) :
    (<span>Your room has been booked!</span>)
}
export default BookRoomButton
