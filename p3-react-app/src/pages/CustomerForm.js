import { Link } from "react-router-dom";

const CustomerForm = () => {
  return (
    <div>
      <h1>This is the customer form page.</h1>
      <Link to='/customer/order'><span>Go to customer order page</span></Link>
      <br></br>
      <Link to='/customer'><span>Go back to customer welcome page</span></Link>
    </div>
  )
}

export default CustomerForm;