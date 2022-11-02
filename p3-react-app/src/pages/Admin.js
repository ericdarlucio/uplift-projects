import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import './Admin.css';
import Footer from '../components/Footer';


import OrderCard from "../components/OrderCard";

const Admin = () => {

  const orders = useSelector(state => state.allOrders);

  const [ selected, setSelected ] = useState(1);

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

          <h2>Orders Dashboard</h2>

          <div className="Admin-status-selection">

            <button
              className={ selected === 1 ? 'Admin-status-selection-active' : 'Admin-status-selection-inactive'}
              onClick={() => {
                setSelected(1);
              }}
            >Pending</button> |

            <button 
              className={ selected === 2 ? 'Admin-status-selection-active' : 'Admin-status-selection-inactive'}
              onClick={() => {
                setSelected(2);
              }}
            >Collected</button> |
            
            <button 
              className={ selected === 3 ? 'Admin-status-selection-active' : 'Admin-status-selection-inactive'}
              onClick={() => {
                setSelected(3);
              }}
            >Dispatched</button> |

            <button
              className={ selected === 4 ? 'Admin-status-selection-active' : 'Admin-status-selection-inactive'}
              onClick={() => {
                setSelected(4);
              }}
            >Delivered</button>
          
          </div>

        </div>

        <div className="Admin-cards-container">
          {
            selected === 1 &&
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
            selected === 2 &&
            <>
              <span>Total: {collectedOrders.length}</span>
              {collectedOrders.map( order => {
                return <OrderCard key={order.firstName} array={order} />
              })}
            </>
          }
          {
            selected === 3 &&
            <>
              <span>Total: {dispatchedOrders.length}</span>
              {dispatchedOrders.map( order => {
                return <OrderCard key={order.firstName} array={order} />
              })}
            </>
          }
          {
            selected === 4 &&
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