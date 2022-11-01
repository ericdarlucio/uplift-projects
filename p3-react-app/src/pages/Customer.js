import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import './Customer.css';

const Customer = () => {

  const [ showForm, setShowForm ] = useState(false);
  const [ trackingNumber, setTrackingNumber ] = useState('');

  const navigate = useNavigate();

  return (
    <div className="CustomerWelcome-container">

      <h1>Hello, dearest customer! Welcome to our water delivery station! Click 'Order now!' to proceed with your order.</h1>

      <br></br>

      <Link to='/customer/form'><button>Order now!</button></Link>

      <button
        type='button'
        onClick={() => setShowForm(!showForm) }
      >Track your order</button>

      {
        showForm &&
        <div className="Customer-tracking-modal">
          <div className="Customer-tracking-modal-content">
            <form>

              <label>Enter tracking number:</label>
              <input 
                type='text'
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              ></input>

              <button
                type='button'
                onClick={() => {
                  if (trackingNumber.trim() === ''){
                    alert('You must enter a valid tracking id!')
                  } else {
                    navigate('/customer/order', {state: {id: trackingNumber}});
                  }
                }
                
                }
              >Track Order</button>

              <button
                type='button'
                onClick={() => {
                  setTrackingNumber('');
                  setShowForm(!showForm)} }
              >Back</button>

            </form>
          </div>
        </div>
      }
      
      <br></br>

      <Link to='/'><span>Return to login page</span></Link>

      <br></br>

    </div>
  )
}

export default Customer;