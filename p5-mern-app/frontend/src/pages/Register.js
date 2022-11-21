import './Register.css';

import Header from "../components/Header";
import { useState } from "react";
import { useDispatch } from 'react-redux';

const Register = () => {

  const dispatch = useDispatch();

  // Register business or user
  const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

  // Register your business
  const [ businessName, setBusinessName ] = useState('');
  const [ businessCategory, setBusinessCategory ] = useState('Construction');
	const [ contactNo, setContactNo ] = useState('');
	const [ stNo, setStreetNo ] = useState('');
	const [ stName, setStreetName ] = useState('');
	const [ brgy, setBarangay ] = useState('Amanoaoac');
  
  // Register as user
  // const [ firstName, setFirstName ] = useState('');
  // const [ lastName, setLastName ] = useState('');

  // Barangays in Mapandan
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


  // Business categories
  const categories = [
    {value:'Construction', label: 'Construction'},
    {value:'Education', label: 'Education'},
    {value:'Food', label: 'Food'},
    {value:'Health', label: 'Health'},
    {value:'Professional Services', label: 'Professional Services'},
    {value:'Shopping', label: 'Shopping'},
    {value:'Others', label: 'Others'}
  ];

  const registerBusiness = () => {
    dispatch({
      type: 'REGISTER_BUSINESS',
      payload: {
        email: email,
        password: password,
        businessName: businessName,
        businessCategory: businessCategory,
        contactNumber: contactNo,
        streetNumber: stNo,
        streetName: stName,
        barangay: brgy
    }});
  };

  return (
    <div>
      <Header/>
      <button>Register your business</button>
      <button>Sign up as user</button>


      {/* Register your business */}
      <div className="Register-business-container">
        <form onSubmit={(e) => {
            e.preventDefault();
            registerBusiness();
        }}>

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
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          ></input>

          <label>Street No.:</label>
          <input
            required
            type='text'
            placeholder='ex. 51 Pico Avenue'
            value={stNo}
            onChange={(e) => setStreetNo(e.target.value)}
          ></input>

          <label>Street Name:</label>
          <input
            required
            type='text'
            placeholder='ex. 51 Pico Avenue'
            value={stName}
            onChange={(e) => setStreetName(e.target.value)}
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
       
          <button type='submit'>Place your order</button>
        </form>
      </div>

      <div>
        
      </div>


    </div>
  )
};

export default Register;