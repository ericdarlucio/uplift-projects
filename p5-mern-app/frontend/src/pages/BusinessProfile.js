import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import Header from "../components/Header";


const BusinessProfile = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  const [streetName, setStreetName] = useState(location.state.business.streetName);
  const [businessCategory, setBusinessCategory] = useState(location.state.business.businessCategory);

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

  return (
    <div>
      <Header/>

      <form
        onSubmit = { (e) => {
          e.preventDefault();
          dispatch( {type: 'UPDATE_BUSINESS', payload: {
            streetName: streetName,
            businessCategory: businessCategory
          }}) ;
        }
        }
      >

        <input
          required
          type='text'
          placeholder='ex. Pico Avenue'
          defaultValue={location.state.business.streetName}
          onChange={(e) => setStreetName(e.target.value)}
        ></input>

        <select
          defaultValue={location.state.business.businessCategory}
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

        <button
          type="submit"
        >Save</button>

      </form>


      {/* <button
        type="submit"
        onClick = { () => dispatch( {type: 'UPDATE_BUSINESS', payload: {
          streetName: streetName,
          businessCategory: businessCategory
        }}) }
      >Save</button> */}
      
    </div>
  )
}

export default BusinessProfile