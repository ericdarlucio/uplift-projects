import { Link } from "react-router-dom";
import './CustomerOrder.css'


const CustomerOrder = () => {
  return (
    <div className="CustomerOrder-container">
      <h1>This is the customer order page.</h1>
      <Link to='/customer/form'><span>Go to back to customer page</span></Link>
    </div>
  )
}

export default CustomerOrder;