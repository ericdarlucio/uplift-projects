import './TrackingForm.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const TrackingForm = () => {

  const [ trackingNumber, setTrackingNumber ] = useState('');
  const navigate = useNavigate();

  return (
      <div className="TrackingForm-container">

        <form>
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
        </form>

      </div>
  )
}

export default TrackingForm;