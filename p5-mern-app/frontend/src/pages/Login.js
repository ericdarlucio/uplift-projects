import Header from '../components/Header';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Login = () => {
	const navigate = useNavigate();
	// const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [login, setLogin] = useState(false);

	const loginAuthentication = () => {
		// prevent the form from refreshing the whole page
		// e.preventDefault();
		// make a popup alert showing the 'submitted' text
		// set configurations
		const configuration = {
			method: 'post',
			url: 'http://localhost:8080/api/v1/businesses/login',
			data: {
				email,
				password
			},
		};

		// make the API call
		axios(configuration)
			.then((result) => {
				console.log(result);
				// We will use localStorage to store User details
				localStorage.setItem('userId', result.data.id);

				setLogin(true);
				navigate('/business-list');
			})
			.catch((error) => {
        alert(error.response.data.status);
				setEmail('');
        setPassword('');
			});
	};

	// // Login handler
	// const loginAuthentication = () => {
	// 	dispatch({
	// 		type: 'LOGIN_BUSINESS',
	// 		payload: {
	// 			email: email,
	// 			password: password,
	// 		},
	// 	});
	// 	setTimeout(() => {
	// 		navigate('/business-list');
	// 	}, 1000);
	// };

	return (
		<div>
			<Header />
			<div>
				<form>
					<label>Username:</label>
					<input
						type='text'
						value={email}
						required
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<label>Password:</label>
					<input
						type='password'
						value={password}
						autoComplete='on'
						required
						onChange={(e) => setPassword(e.target.value)}
					></input>

					<button
						type='button'
						onClick={() => {
							loginAuthentication();
						}}
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
