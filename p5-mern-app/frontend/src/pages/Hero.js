import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './Hero.css';

const Hero = () => {
  return (
    <div className="Hero-background">

      <Header/>

      <div className="Hero-container">
        <div className="Hero-content">
          <h1>Helping local businesses attract more customers</h1>
          <p>Make it easy for the customers to find you</p>
          <Link to='/register'><button>Register your business now!</button></Link>
        </div>
        <div className="Hero-subcontent">
          <h2>Discover local businesses nearby</h2>
          <p>Local businesses need our support</p>
          <Link to='/business-list'><button>See all businesses</button></Link>
        </div>
      </div>

      <Footer/>

    </div>
  )
};

export default Hero;