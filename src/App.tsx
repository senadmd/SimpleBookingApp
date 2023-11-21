
import './App.css'
import Login from './login/Login';
import Booking from './booking/Booking';
import { useAppSelector } from './hooks';

function App() {
  const isLoggedIn = useAppSelector(state => state.loginSlice.isLoggedIn);
  return (!isLoggedIn) ?  (<Login/>):(<Booking/>)
}

export default App
