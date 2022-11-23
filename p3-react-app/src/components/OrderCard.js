import './OrderCard.css';
import { useDispatch } from 'react-redux';

const OrderCard = ( {array} ) => {

  const dispatch = useDispatch();

  return (
    <div className="OrderCard-container">

      <p>{array.firstName} {array.lastName}</p>
      <p>{array.contactNo}</p>
      <p>{array.streetAddress}, {array.barangay}</p>
      <p>Order Qty: {array.quantity}</p>
      <p>Order ID: {array.id}</p>

      {
        array.status === 'pending' &&
        <button
          onClick = { () => {
            if(window.confirm('Are you sure you want to move the item to collected?')){
              dispatch( {type: 'MOVE_TO_COLLECTED', payload: {firstName: array.firstName}});
            }
          }}
        >Move to Collected</button>
      }

      {
        array.status === 'collected' &&
        <button
          onClick = { () => {
            if(window.confirm('Are you sure you want to move the item to dispatched?')){
              dispatch( {type: 'MOVE_TO_DISPATCHED', payload: {firstName: array.firstName}});
            }
          }}
        >Move to Dispatched</button>
      }

      {
        array.status === 'dispatched' &&
        <button
          onClick = { () => {
            if(window.confirm('Are you sure you want to move the item to delivered?')){
              dispatch( {type: 'MOVE_TO_DELIVERED', payload: {firstName: array.firstName}});
            }
          }}
        >Move to Delivered</button>
      }

      <button
        style={{
          color: "white",
          backgroundColor: "red",
          border: "1px solid black"
        }}
        onClick = { () => {
          if(window.confirm('Are you sure you want to delete?')){
            dispatch( {type: 'DELETE', payload: {firstName: array.firstName}});
          }
        }}
      >Delete</button>

    </div>
  )
}

export default OrderCard;