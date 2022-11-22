import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import './BusinessProfile.css'


const BusinessProfile = () => {
	const navigate = useNavigate();
	// const dispatch = useDispatch();
	const location = useLocation();
	const profile = location.state.business;

	const clientInStorage = localStorage.getItem('userId');
  // console.log(clientInStorage, profile._id);

	const [email, setEmail] = useState(profile.email);
	const [streetName, setStreetName] = useState(profile.streetName);
	const [businessCategory, setBusinessCategory] = useState(profile.businessCategory);
	const [businessName, setBusinessName] = useState(profile.businessName);
	const [contactNumber, setContactNo] = useState(profile.contactNumber);
	const [streetNumber, setStreetNo] = useState(profile.streetNumber);
	const [barangay, setBarangay] = useState(profile.barangay);
	const [photos, setPhotos] = useState(profile.photos);
	const [reviews, setReviews] = useState(profile.reviews);
	const [showForm, setShowForm] = useState(false);
	const [login, setLogin] = useState(false);
	
	const dispatch = useDispatch();

	const photoLength = profile.photos.length;
	const reviewLength = profile.reviews.length;

	 // Delete handler
	 const deleteBusiness = () => {
    const answer = window.confirm("Are you sure you want to delete this?");
    if (answer) {
      dispatch( {type: 'DELETE_BUSINESS', payload: {_id: profile._id}});
			window.localStorage.clear();
			navigate('/business-list');
			window.location.reload(false);
    }
  };

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

	const updateBusiness = (e) => {
		// prevent the form from refreshing the whole page
		e.preventDefault();
		// make a popup alert showing the 'submitted' text
		// set configurations

		const configuration = {
			method: 'put',
			url: `http://localhost:8080/api/v1/businesses/${profile._id}`,
			data: {
				businessName,
				businessCategory,
				contactNumber,
				streetNumber,
				streetName,
				barangay,
				photos
			},
		};

		// make the API call
		axios(configuration)
			.then((result) => {
				alert(result.data.status);
				setLogin(true);
				navigate('/business-list');
				window.location.reload(false);
			}).catch((error) => {
				alert(error.response.data.status);
			});
	};

	return (
		<div className='BusinessProfile-container'>
			<Header />

			<div className='BusinessProfile-content'>

				<div className='BusinessProfile-top'>

					<div className='BusinessProfile-top-right'>
						<h1>{profile.businessName}</h1>
						<small><em>{profile.businessCategory}</em></small>
						<br></br>
						<small>⭐⭐⭐⭐⭐</small>
					</div>
					
					<div className='BusinessProfile-top-left'>
						<p>☎️ {profile.contactNumber} </p>
						<p>📧 {profile.email} </p>
						<p>🗺️ {profile.streetNumber} {profile.streetName}, {profile.barangay} </p>
						<p className='BusinessProfile-review'>⭐ Write a review </p>
					</div>


				</div>

				<div className='BusinessProfile-middle'>
					<h1>Gallery</h1>
					<hr></hr>
					{ photoLength === 0 ?
						<img className='BusinessProfile-image' src={require('../images/no-image.png')} alt='No photos'></img> :
						<img className='BusinessProfile-image' src={`${photos[0]}`} alt='Gallery'></img>
        	}
				</div>

				<div className='BusinessProfile-bottom'>
					<h1>Reviews</h1>
					<hr></hr>
					{ reviewLength === 0 ?
						<p>No reviews available</p> :
						<p>{profile.reviews[0]}</p>
        	}

				</div>

			</div>

			{ profile._id === clientInStorage && 
				<>
					<button onClick={() => setShowForm(!showForm)}>Edit</button>
					<button onClick={() => { deleteBusiness() }}>Delete</button>
				</>
			}

			{showForm && (
				<form
					onSubmit={(e)=>updateBusiness(e)}

						// dispatch({
						// 	type: 'UPDATE_BUSINESS',
						// 	payload: {
						// 		_id: profile._id,
						// 		business: {
						// 			businessName: businessName,
						// 			businessCategory: businessCategory,
						// 			contactNumber: contactNumber,
						// 			streetNumber: streetNumber,
						// 			streetName: streetName,
						// 			barangay: barangay,
						// 			photos: photos
						// 		}
						// 	},
						// });
					// }}
				>

					<input
						required
						type='text'
						placeholder='Enter your business name:'
						defaultValue={profile.businessName}
						onChange={(e) => setBusinessName(e.target.value)}
					></input>

					<input
						required
						type='text'
						placeholder='Enter your contact number:'
						defaultValue={profile.contactNumber}
						onChange={(e) => setContactNo(e.target.value)}
					></input>

					<input
						required
						type='text'
						placeholder='ex. 51'
						defaultValue={profile.streetNumber}
						onChange={(e) => setStreetNo(e.target.value)}
					></input>

					<input
						required
						type='text'
						placeholder='ex. Pico Avenue'
						defaultValue={profile.streetName}
						onChange={(e) => setStreetName(e.target.value)}
					></input>

					<select
						defaultValue={profile.businessCategory}
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

					<input
						type='text'
						placeholder='ex. http://cdn.onlinewebfonts.com/svg/img_148071.png'
						defaultValue={profile.photos}
						onChange={(e) => setPhotos(e.target.value)}
					></input>

					<button 
						type='submit'
					>Save</button>
				</form>
			)}

			
			
			<Footer/>

		</div>

	);
};

export default BusinessProfile;