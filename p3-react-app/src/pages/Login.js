import './Login.css'

import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';

const Login = () => {
  const [ showForm, setShowForm ] = useState(false);
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const navigate = useNavigate();


  // Login Validation
  const checkCredentials = (e) => {
    e.preventDefault();
    if ( username === 'admin' && password === '1234'){  
      navigate('/sikretongmalupet');
    }else {
      alert('Incorrect username or password');
      setPassword('');
      setUsername('')
    }
  }

  return (
    <div className='Login-container'>
      <h1>Login Page</h1>
      <button
        onClick={() => setShowForm(!showForm)}
      >Login as admin</button>
      {
        showForm && 
        <div className='Login-modal'>
          <div className='Login-modal-content'>
            <form>
              <label>Username:</label>
              <input 
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <label>Password:</label>
              <input 
                type='password'
                value={password}
                autoComplete='on'
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button
                onClick={checkCredentials}
              >Login</button>
              <button
                type='button'
                onClick={() => setShowForm(!showForm) }
              >Back</button>
            </form>
          </div>
        </div>

      }
      <br></br>
      <Link to='/customer'><span>Continue as customer</span></Link>
    </div>
  )
}

export default Login