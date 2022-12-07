import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import './CustomerForm.css';

const CustomerForm = () => {
	const [ fname, setFirstName ] = useState('');
	const [ lname, setLastName ] = useState('');
	const [ contactNo, setContactNo ] = useState('');
	const [ stAddress, setStreetAddress ] = useState('');
	const [ brgy, setBarangay ] = useState('Amanoaoac');
  const [ waterOrder, setWaterOrder ] = useState(1);
  const [ showConfirmation, setShowConfirmation ] = useState(false);
  const orderId = uuidv4().split('-')[4];
  const navigate = useNavigate();
  const dispatch = useDispatch();

	const mapandanBarangays = [
    {value:'Amanoaoac', label: 'Amanoaoac'},
    {value:'Apaya', label: 'Apaya'},
    {value:'Aserda', label: 'Aserda'},
    {value:'Baloling', label: 'Baloling'},
    {value:'Coral', label: 'Coral'},
    {value:'Golden', label: 'Golden'},
    {value:'Jimenez', label: 'Jimenez'},
    {value:'Lambayan', label: 'Lambayan'},
    {value:'Luyan', label: 'Luyan'},
    {value:'Nilombot', label: 'Nilombot'},
    {value:'Pias', label: 'Pias'},
    {value:'Poblacion', label: 'Poblacion'},
    {value:'Primicias', label: 'Primicias'},
    {value:'Santa Maria', label: 'Santa Maria'},
    {value:'Torres', label: 'Torres'}
  ];

  const submitOrder = () => {
    dispatch({
      type: 'SUBMIT_ORDER',
      payload: {
        firstName: fname,
        lastName: lname,
        contactNo: contactNo,
        streetAddress: stAddress,
        barangay: brgy,
        quantity: waterOrder,
        id: orderId,
        status: 'pending'
      }});
    alert(`Your order has been submitted. Your order id: ${orderId} has been sent to your mobile number. `);
    navigate('/customer/order', {state: {id: orderId}});
  } 

	return (
		<div className='CustomerForm-container'>
      
			<form onSubmit={(e) => {
          e.preventDefault();
          setShowConfirmation(!showConfirmation);
      }}>

				<label>First Name:</label>
				<input
          required
					type='text'
					value={fname}
					onChange={(e) => setFirstName(e.target.value)}
				></input>

				<label>Last Name:</label>
				<input
          required
					type='text'
					value={lname}
					onChange={(e) => setLastName(e.target.value)}
				></input>

        <label>Mobile No.:</label>
				<input
          required
					type='tel'
          pattern="[0-9]{11}"
					value={contactNo}
					onChange={(e) => setContactNo(e.target.value)}
				></input>

				<label>Street Address:</label>
				<input
          required
					type='text'
					placeholder='ex. 51 Pico Avenue'
					value={stAddress}
					onChange={(e) => setStreetAddress(e.target.value)}
				></input>

				<label>Barangay:</label>
				<select
					defaultValue={brgy}
					onChange={(e) => setBarangay(e.target.value)}
				>
					<option style={{ textAlign: 'center' }} disabled>
						---Choose your barangay---
					</option>
					{mapandanBarangays.map((option) => {
						return (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						);
					})}
				</select>

				<label>Number of order:</label>
				<input
          required
					type='number'
					value={waterOrder}
          min='1'
          max='20'
					onChange={(e) => setWaterOrder(e.target.value)}
				></input>        

        <button 
          type='submit'
        >Place your order</button>

			</form>

      {
        showConfirmation &&
        <div className='CustomerForm-confirmation-modal'>

          <div className='CustomerForm-confirmation-modal-content'>
            <h3>Order Summary: </h3>
            <p>First Name: <span>{fname}</span></p>
            <p>Last Name: <span>{lname}</span></p>
            <p>Contact No.: <span>{contactNo}</span></p>
            <p>Street Address: <span>{stAddress}</span></p>
            <p>Barangay: <span>{brgy}</span></p>
            <p>Number Of Orders: <span>{waterOrder}</span></p>

            <div className='CustomerForm-button-container'>
              <button
                onClick={() => setShowConfirmation(!showConfirmation)}
              >Cancel</button>

              <button
                type='submit'
                onClick={(e) => {
                  e.preventDefault()
                  submitOrder();
                  setShowConfirmation(!showConfirmation);
                }}
              >Confirm</button>
            </div>

          </div>

        </div>
      }

		</div>
	);
};

export default CustomerForm;