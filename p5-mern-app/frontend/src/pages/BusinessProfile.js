import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import Header from '../components/Header';

const BusinessProfile = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const profile = location.state.business;

	const clientInStorage = localStorage.getItem('userId');
  console.log(clientInStorage);

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

	// console.log(photos);

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

	return (
		<div>
			<Header />

			{ profile._id === clientInStorage && 
						<button>Logout</button>
			}

			<div>
				<p>{businessName}</p>
				<p>{contactNumber}</p>
				<p>{email}</p>
				<p>{streetNumber} {streetName}, {barangay}</p>
			</div>

			{showForm && (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						dispatch({
							type: 'UPDATE_BUSINESS',
							payload: {
								_id: profile._id,
								business: {
									businessName: businessName,
									businessCategory: businessCategory,
									contactNumber: contactNumber,
									streetNumber: streetNumber,
									streetName: streetName,
									barangay: barangay,
									photos: photos
								}
							},
						});
					}}
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

					<button type='submit'>Save</button>
				</form>
			)}

			{ profile._id === clientInStorage && 
						<button onClick={() => setShowForm(!showForm)}>Edit</button>
			}
		</div>
	);
};

export default BusinessProfile;