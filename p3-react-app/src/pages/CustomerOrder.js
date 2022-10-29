import { Link } from "react-router-dom";
import './CustomerOrder.css';
import { useLocation } from "react-router-dom";

const CustomerOrder = () => {

  const location = useLocation();

  return (
    <div className="CustomerOrder-container">
      <h1>Hi {location.state.fname} {location.state.lname}! The status of your order is pending.</h1>
      
      <Link to='/customer'><span>Go to back to customer welcome page</span></Link>
    </div>
  )
}

export default CustomerOrder;