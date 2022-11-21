import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header-container'>
      <Link to='/'>Homepage</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      <Link to='/business-list'>BusinessList</Link>
      <Link to='/business-profile'>BusinessProfile</Link>
    </div>
  )
}

export default Header