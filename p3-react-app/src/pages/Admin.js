import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './Admin.css'
import OrderCard from "../components/OrderCard";

const Admin = () => {

  const orders = useSelector(state => state.allOrders);

  return (
    <div className="Admin-container">
      <h1>This is the admin page.</h1>
      {
        orders.map(order => {
          return <OrderCard key={order.firstName} array={order} />
        })

      }
      <Link to='/'><span>Go to back login page</span></Link>      
    </div>
  )
}

export default Admin;