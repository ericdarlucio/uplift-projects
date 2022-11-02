import { Link } from "react-router-dom";
import { useState } from "react";

import './Customer.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomerForm from "./CustomerForm";
import TrackingForm from "../components/TrackingForm";

const Customer = () => {

  const [ showDefault, setShowDefault ] = useState(true);

  return (
    <div className="Customer-container">

      <Header />
      
      <div className="Customer-content">

        <div className="Customer-content-tab">
          <div
            className={showDefault ? 'Customer-content-tab-active' : 'Customer-content-tab-inactive'}
            onClick={() => setShowDefault(true)}
          >Order</div>
          <div
            className={!showDefault ? 'Customer-content-tab-active' : 'Customer-content-tab-inactive'}
            onClick={() => setShowDefault(false)}
          >Track</div>
        </div>
        
        {
          showDefault && 
          <CustomerForm />
        }

        {
          !showDefault &&

          <>
            <TrackingForm />
          </>
        }

        <br></br>

        <Link to='/'><span>Return to homepage</span></Link>

      </div>

      <Footer />

    </div>
  )
}

export default Customer;