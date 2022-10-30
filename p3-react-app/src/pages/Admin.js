import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './Admin.css'
import OrderCard from "../components/OrderCard";
import { useState } from "react";

const Admin = () => {

  const orders = useSelector(state => state.allOrders);

  const [ showPending, setShowPending ] = useState(true);
  const [ showCollected, setShowCollected ] = useState(false);
  const [ showDispatched, setShowDispatched ] = useState(false);
  const [ showDelivered, setShowDelivered ] = useState(false);

  const pendingOrders = orders.filter( order => order.status === 'pending' );
  const collectedOrders = orders.filter( order => order.status === 'collected' );
  const dispatchedOrders = orders.filter( order => order.status === 'dispatched' );
  const deliveredOrders = orders.filter( order => order.status === 'delivered' );

  return (
    <div className="Admin-container">
      <Link to='/'><span>Log out</span></Link>      
      <div>Orders Dashboard</div>
      <div className="Admin-status-container">
        <div
          className="Admin-status-pending"
          onClick={() => {
            setShowPending(true);
            setShowCollected(false);
            setShowDispatched(false);
            setShowDelivered(false);
          }}
        >Pending</div>

        <div 
          className="Admin-status-collected"
          onClick={() => {
            setShowPending(false);
            setShowCollected(true);
            setShowDispatched(false);
            setShowDelivered(false);
          }}
        >Collected</div>
        
        <div 
          className="Admin-status-dispatched"
          onClick={() => {
            setShowPending(false);
            setShowCollected(false);
            setShowDispatched(true);
            setShowDelivered(false);
          }}
        >Dispatched</div>

        <div
          className="Admin-status-completed"
          onClick={() => {
            setShowPending(false);
            setShowCollected(false);
            setShowDispatched(false);
            setShowDelivered(true);
          }}
        >Delivered</div>
      </div>
      {
        showPending &&
        pendingOrders.map( order => {
          return <OrderCard key={order.firstName} array={order} />
        })
      }
      {
        showCollected &&
        collectedOrders.map( order => {
          return <OrderCard key={order.firstName} array={order} />
        })
      }
      {
        showDispatched &&
        dispatchedOrders.map( order => {
          return <OrderCard key={order.firstName} array={order} />
        })
      }
      {
        showDelivered &&
        deliveredOrders.map( order => {
          return <OrderCard key={order.firstName} array={order} />
        })
      }
    </div>
  )
}

export default Admin;