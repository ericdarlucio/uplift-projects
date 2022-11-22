import Header from '../components/Header';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import './Login.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	// const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [login, setLogin] = useState(false);

	const loginAuthentication = (e) => {
		// prevent the form from refreshing the whole page
		e.preventDefault();
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
				// console.log(result);
				// We will use localStorage to store User details
				localStorage.setItem('userId', result.data.id);
        alert(result.data.status);
				setLogin(true);
				navigate('/business-list');
				window.location.reload(false);
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
		<div className='Login-container'>
			{/* Header */}
			<Header />

			{/* Login form */}
			<div className='Login-form-container'>
				
				<div className='Login-left'>

					<form
						onSubmit={(e)=>loginAuthentication(e)}
					>
						<label className='Login-header'>Login</label>
						<label className='Login-navigate'>Doesn't have an account yet? <Link to='/register'>Signup</Link></label>
						<label>Email</label>
						<input
							type='email'
							value={email}
							required
							onChange={(e) => setEmail(e.target.value)}
						></input>
						<label>Password</label>
						<input
							type='password'
							value={password}
							autoComplete='on'
							required
							onChange={(e) => setPassword(e.target.value)}
						></input>

						<button
							type='submit'
						>
							Login
						</button>
					</form>
				</div>

				<div className='Login-right'>
					<p>Good to see you again!</p>
					<img className='Login-image' src={require('../images/login-cartoon.png')} alt='login cartoon'></img>
				</div>

			</div>

			{/* Footer */}
			<Footer/>

		</div>
	);
};

export default Login;
