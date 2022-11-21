import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import Header from '../components/Header';

const BusinessProfile = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const profile = location.state.business;
	console.log(profile);

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
									streetName: streetName,
									businessCategory: businessCategory,
								},
							},
						});
					}}
				>
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

					<button type='submit'>Save</button>
				</form>
			)}

			<button onClick={() => setShowForm(!showForm)}>Edit</button>
		</div>
	);
};

export default BusinessProfile;