import { Link } from "react-router-dom";
import './Customer.css'


const Customer = () => {
  return (
    <div className="CustomerWelcome-container">
      <h1>Hello, dearest customer! Welcome to our water delivery station! Click 'Order now!' to proceed with your order.</h1>
      <Link to='/customer/form'><button>Order now!</button></Link>
      <br></br>
      <Link to='/'><span>Return to login page</span></Link>
    </div>
  )
}

export default Customer;