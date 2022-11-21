import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const BusinessCard = ( {business} ) => {

  const dispatch = useDispatch();

  return (
    <div>

      <Link to='/business-profile' state={{business}}><strong>{business.businessName}</strong></Link>
      <br></br>
      <span><em>{business.contactNumber}</em></span>
      <br></br>
      <span><em>{business.streetNumber} {business.streetName}</em></span>
      <br></br>
      <span><em>{business.businessCategory}</em></span>
      <br></br>
      <button
          onClick = { () => dispatch( {type: 'DELETE_BUSINESS', payload: {_id: business._id}}) }
      >Delete</button>


    </div>
  );
};

export default BusinessCard;