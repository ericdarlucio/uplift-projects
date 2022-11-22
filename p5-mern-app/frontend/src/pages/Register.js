import './Register.css';
import Header from '../components/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// Register business or user
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Register your business
	const [businessName, setBusinessName] = useState('');
	const [businessCategory, setBusinessCategory] = useState('Construction');
	const [contactNumber, setContactNo] = useState('');
	const [streetNumber, setStreetNo] = useState('');
	const [streetName, setStreetName] = useState('');
	const [barangay, setBarangay] = useState('Amanoaoac');
  const [login, setLogin] = useState(false);

	// Barangays in Mapandan
	const mapandanBarangays = [
		{ value: 'Amanoaoac', label: 'Amanoaoac' },
		{ value: 'Apaya', label: 'Apaya' },
		{ value: 'Aserda', label: 'Aserda' },
		{ value: 'Baloling', label: 'Baloling' },
		{ value: 'Coral', label: 'Coral' },
		{ value: 'Golden', label: 'Golden' },
		{ value: 'Jimenez', label: 'Jimenez' },
		{ value: 'Lambayan', label: 'Lambayan' },
		{ value: 'Luyan', label: 'Luyan' },
		{ value: 'Nilombot', label: 'Nilombot' },
		{ value: 'Pias', label: 'Pias' },
		{ value: 'Poblacion', label: 'Poblacion' },
		{ value: 'Primicias', label: 'Primicias' },
		{ value: 'Santa Maria', label: 'Santa Maria' },
		{ value: 'Torres', label: 'Torres' },
	];

	// Business categories
	const categories = [
		{ value: 'Construction', label: 'Construction' },
		{ value: 'Education', label: 'Education' },
		{ value: 'Food', label: 'Food' },
		{ value: 'Health', label: 'Health' },
		{ value: 'Professional Services', label: 'Professional Services' },
		{ value: 'Shopping', label: 'Shopping' },
		{ value: 'Others', label: 'Others' },
	];

	const registerBusiness = () => {
		// prevent the form from refreshing the whole page
		// e.preventDefault();
		// make a popup alert showing the 'submitted' text
		// set configurations
    dispatch({
	    type: 'REGISTER_BUSINESS',
	    payload: {
	      email: email,
	      password: password,
	      businessName: businessName,
	      businessCategory: businessCategory,
	      contactNumber: contactNumber,
	      streetNumber: streetNumber,
	      streetName: streetName,
	      barangay: barangay
	  }});

		const configuration = {
			method: 'post',
			url: 'http://localhost:8080/api/v1/businesses/register',
			data: {
				email,
				password,
				businessName,
				businessCategory,
				contactNumber,
				streetNumber,
				streetName,
				barangay
			},
		};

		// make the API call
		axios(configuration)
			.then((result) => {
				alert(result.data.status);
				setLogin(true);
				navigate('/login');
			})
			.catch((error) => {
				alert(error.response.data.status);
			});
	};

	// Register business handler
	// const registerBusiness = () => {
	//   dispatch({
	//     type: 'REGISTER_BUSINESS',
	//     payload: {
	//       email: email,
	//       password: password,
	//       businessName: businessName,
	//       businessCategory: businessCategory,
	//       contactNumber: contactNumber,
	//       streetNumber: streetNumber,
	//       streetName: streetName,
	//       barangay: barangay
	//   }});
	// };

	return (
		<div className='Register-container'>
			<Header />

			{/* Register your business */}
			<div className='Register-business-container'>
				<form>
					<label>Email:</label>
					<input
						required
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>

					<label>Password:</label>
					<input
						required
						type='password'
						autoComplete='on'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></input>

					<label>Business Name:</label>
					<input
						required
						type='text'
						value={businessName}
						onChange={(e) => setBusinessName(e.target.value)}
					></input>

					<label>Business Category:</label>
					<select
						defaultValue={businessCategory}
						onChange={(e) => setBusinessCategory(e.target.value)}
					>
						<option style={{ textAlign: 'center' }} disabled>
							---Choose business category---
						</option>
						{categories.map((option) => {
							return (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							);
						})}
					</select>

					<label>Contact No.:</label>
					<input
						required
						type='tel'
						value={contactNumber}
						onChange={(e) => setContactNo(e.target.value)}
					></input>

					<label>Street No.:</label>
					<input
						required
						type='text'
						placeholder='ex. 123'
						value={streetNumber}
						onChange={(e) => setStreetNo(e.target.value)}
					></input>

					<label>Street Name:</label>
					<input
						required
						type='text'
						placeholder='ex. Pico Avenue'
						value={streetName}
						onChange={(e) => setStreetName(e.target.value)}
					></input>

					<label>Barangay:</label>
					<select
						defaultValue={barangay}
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

					<br></br>

					<button
						type='button'
						onClick={() => {
							registerBusiness();
						}}
					>
						Register
					</button>
				</form>
			</div>

			<div className='Register-user-container'></div>
		</div>
	);
};

export default Register;
