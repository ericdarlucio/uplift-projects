import { Link } from "react-router-dom";


const Customer = () => {
  return (
    <>
      <h1>This is the customer welcome page.</h1>
      <Link to='/customer/form'><span>Go to customer form page</span></Link>
      <br></br>
      <Link to='/'><span>Go to login page</span></Link>
      
    </>
  )
}

export default Customer;