import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/'><button>Hero</button></Link>
      <Link to='/register'><button>Register</button></Link>
      <Link to='/login'><button>Login</button></Link>
    </div>
  )
}

export default Header