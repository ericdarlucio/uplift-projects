import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import './CustomerOrder.css';

const CustomerOrder = () => {

  const orders = useSelector(state => state.allOrders);
  const location = useLocation();
  const ordersId = orders.map(order => order.id)
  
  return (
    <div className="CustomerOrder-container">

      <h1>Order Id: {location.state.id}</h1>

      {
        ordersId.includes(location.state.id) &&
        orders.filter(order => order.id === location.state.id).map(order => {
            return (
              <>
                <p>Hi {order.firstName} {order.lastName}! The status of your order is {order.status}.</p>
              </>
            )
        })
      }

      {
        !ordersId.includes(location.state.id) &&
        <p>Order not found!</p>
      }

      <br></br>

      <Link to='/customer'><span>Go to back to customer welcome page</span></Link>
      
    </div>
  )
}

export default CustomerOrder;