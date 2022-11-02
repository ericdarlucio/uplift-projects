import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import './CustomerOrder.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const CustomerOrder = () => {

  const orders = useSelector(state => state.allOrders);
  const location = useLocation();
  const ordersId = orders.map(order => order.id)
  
  return (
    <div className="CustomerOrder-container">

      <Header />


      <div className="CustomerOrder-content">
        
        <h3>Order Id: {location.state.id}</h3>

        {
          ordersId.includes(location.state.id) &&
          orders.filter(order => order.id === location.state.id).map(order => {
            return <p key={order.id}>Hi {order.firstName} {order.lastName}! The status of your order is {order.status}.</p>
          })
        }

        {
          !ordersId.includes(location.state.id) &&
          <p>Hi! Your order is not found!</p>
        }

        <Link to='/'><span>Return to homepage</span></Link>

      </div>

      <Footer />
    </div>
  )
}

export default CustomerOrder;