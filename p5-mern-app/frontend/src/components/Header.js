import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header-container'>
      <Link to='/'>Homepage</Link>
      <div className='Header-right'>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}

export default Header