import Header from "../components/Header";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {

  const dispatch = useDispatch();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  // Login handler
  const loginAuthentication = () => {
    dispatch({
      type: 'LOGIN_BUSINESS',
      payload: {
        email: email,
        password: password
    }});
  };

  return (
    <div>
      <Header/>
      <div>
        <form>
          <label>Username:</label>
          <input 
            type='text'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password:</label>
          <input 
            type='password'
            value={password}
            autoComplete='on'
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button
            type='button'
            onClick={() => { loginAuthentication() }}
          >Login</button>

        </form>
      </div>
    </div>  
)
};

export default Login;