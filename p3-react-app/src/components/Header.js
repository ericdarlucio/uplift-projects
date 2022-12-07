import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <img 
          className='Header-logo'
          src={require('../images/logo.png')}
          alt='logo' 
        />
    </div>
  )
}

export default Header;