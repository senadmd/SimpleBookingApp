import { useRef } from 'react';
import '../App.css'
import { useAppDispatch } from '../hooks';
import { loginUser } from './loginSlice';
function Login() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const dispatchLogin = (username:string) => {
      dispatch(loginUser(username));
    };
    
return (
    <>
<h1>Login to BookingApp</h1>
<div className="card">
  <input style={{padding:'5px', margin:'15px'}} placeholder='Namn' ref={usernameRef} />
  <button onClick={() => dispatchLogin(usernameRef.current?.value??"")}>
    Sign in
  </button>
</div>
</>)
}

export default Login
