import './OrderCard.css';
import { useDispatch } from 'react-redux';

const OrderCard = ({array}) => {

  const dispatch = useDispatch();

  return (
    <div className="OrderCard-container">

      <p>{array.firstName} {array.lastName}</p>
      <p>{array.streetAddress}, {array.barangay}</p>
      <p>Order Qty: {array.quantity}</p>
      <p>Order ID: {array.id}</p>

      {
        array.status === 'pending' &&
        <button
          onClick = { () => dispatch( {type: 'MOVE_TO_COLLECTED', payload: {firstName: array.firstName}}) }
        >Move to Collected</button>
      }

      {
        array.status === 'collected' &&
        <button
          onClick = { () => dispatch( {type: 'MOVE_TO_DISPATCHED', payload: {firstName: array.firstName}}) }
        >Move to Dispatched</button>
      }

      {
        array.status === 'dispatched' &&
        <button
          onClick = { () => dispatch( {type: 'MOVE_TO_DELIVERED', payload: {firstName: array.firstName}}) }
        >Move to Delivered</button>
      }

      <button
        onClick = { () => dispatch( {type: 'DELETE', payload: {firstName: array.firstName}}) }                
      >Delete</button>

    </div>
  )
}

export default OrderCard