import './Login.css'

import { Link, useNavigate } from 'react-router-dom';

import { useState  } from 'react';

const Login = () => {
  const [ showForm, setShowForm ] = useState(false);
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const navigate = useNavigate();

  const checkCredentials = (e) => {
    e.preventDefault();
    if ( username === 'admin' && password === '1234'){  
      navigate('/admin');
    }else {
      alert('Incorrect username or password');
      setPassword('');
      setUsername('')
    }
  }

  return (
    <>
      <h1>Login Page</h1>
      <button
        onClick={() => setShowForm(!showForm)}
      >Login as admin</button>
      {
        showForm && 
        <div className='Login-modal'>
          <form>
            <label>Username:</label>
            <input 
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br></br>
            <label>Password:</label>
            <input 
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br></br>
            <button
              onClick={checkCredentials}
            >Login</button>
          </form>
        </div>

      }
      <br></br>
      <Link to='/customer'><span>Continue as customer</span></Link>
    </>
  )
}

export default Login