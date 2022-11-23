import './Login.css';
import Footer from '../components/Footer';

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
    }else if
      (username === '' || password === ''){
        alert('Must enter a valid input!');
    }else {
      alert('Incorrect username or password!');
      setPassword('');
      setUsername('');
    }
  }

  return (
    <div className='Login-container'>

      <div className='Login-header'>
        <img 
          className='Login-logo'
          src={require('../images/logo.png')}
          alt='logo' 
        />
        <button
          className='Login-login-button'
          onClick={() => setShowForm(!showForm)}
        >Login as admin</button>
      </div>

      <div className='Login-story'>
        <h1>We deliver clean and fresh drinking water at your doorstep!</h1>
        <h2>Get your water while saving your precious time and energy.</h2>
        <h3>Ready to place an order or want to track existing order? Click the button below to get started.</h3>
        <Link to='/customer'>
          <button
            className='Login-start-button'
          >Get Started</button>
        </Link>
      </div>

      {
        showForm && 
        <div className='Login-modal'>
          <div className='Login-modal-content'>

            <h1>Login</h1>

            <form>
              <label>Username:</label>
              <input 
                type='text'
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <label>Password:</label>
              <input 
                type='password'
                value={password}
                autoComplete='on'
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>

              <div className='Login-button-container'>
                <button
                  type='button'
                  onClick={() => setShowForm(!showForm) }
                >Back</button>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black"
                  }}
                  onClick={checkCredentials}
                >Login</button>
              </div>
            </form>

          </div>
        </div>
      }

      <Footer />

    </div>
  )
}

export default Login;