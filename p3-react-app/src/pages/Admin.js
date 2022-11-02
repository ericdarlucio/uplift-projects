import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import './Admin.css';
import Footer from '../components/Footer';


import OrderCard from "../components/OrderCard";

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

      <div className='Admin-header'>
        <img 
          className='Admin-logo'
          src={require('../images/logo.png')}
          alt='logo' 
        />
        <Link to='/'>
          <button
            className='Admin-logout-button'
          >Logout</button>
        </Link>
      </div>

      <div className="Admin-content">

        <div className="Admin-status-container">

          <div
            className="Admin-status-pending"
            onClick={() => {
              setShowPending(true);
              setShowCollected(false);
              setShowDispatched(false);
              setShowDelivered(false);
            }}
          >Pending</div> |

          <div 
            className="Admin-status-collected"
            onClick={() => {
              setShowPending(false);
              setShowCollected(true);
              setShowDispatched(false);
              setShowDelivered(false);
            }}
          >Collected</div> |
          
          <div 
            className="Admin-status-dispatched"
            onClick={() => {
              setShowPending(false);
              setShowCollected(false);
              setShowDispatched(true);
              setShowDelivered(false);
            }}
          >Dispatched</div> |

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

        <div className="Admin-cards-container">
          {
            showPending &&
            <>
              <span>Total: {pendingOrders.length}</span>
              {
                pendingOrders.map( order => {
                return <OrderCard key={order.firstName} array={order} />
                })
              }
            </>
          }
          {
            showCollected &&
            <>
              <span>Total: {collectedOrders.length}</span>
              {collectedOrders.map( order => {
                return <OrderCard key={order.firstName} array={order} />
              })}
            </>
          }
          {
            showDispatched &&
            <>
              <span>Total: {dispatchedOrders.length}</span>
              {dispatchedOrders.map( order => {
                return <OrderCard key={order.firstName} array={order} />
              })}
            </>
          }
          {
            showDelivered &&
            <>
              <span>Total: {deliveredOrders.length}</span>
              {deliveredOrders.map( order => {
                return <OrderCard key={order.firstName} array={order} />
              })}
            </>
          }
        </div>

      </div>

      <Footer />

    </div>

      
  )
}

export default Admin;