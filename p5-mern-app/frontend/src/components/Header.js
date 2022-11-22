import './Header.css';
import {Link, useNavigate} from 'react-router-dom';

const Header = () => {

  const clientInStorage = localStorage.getItem('userId');
  const navigate = useNavigate();

  return (
    <div className='Header-container'>
      <Link to='/'><img className='Header-image' src={require('../images/home.png')} alt='login cartoon'></img></Link>
      <div className='Header-right'>
        { clientInStorage === null ?
          <>
            <Link to='/register'><button className='Header-register'>Register</button></Link>
            <Link to='/login'><button className='Header-login'>Login</button></Link>
          </> :
          <>
            <button 
              className='Header-login'
              onClick={() => {
                window.localStorage.clear();
                navigate('/login');
              }}
            >Logout</button>
          </>

        }
        
      </div>
    </div>
  )
}

export default Header