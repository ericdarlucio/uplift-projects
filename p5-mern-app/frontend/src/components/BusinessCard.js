import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./BusinessCard.css"

const BusinessCard = ( {business} ) => {

  const dispatch = useDispatch();

  // Delete handler
  const deleteBusiness = () => {
    const answer = window.confirm("Are you sure you want to delete this?");
    if (answer) {
      dispatch( {type: 'DELETE_BUSINESS', payload: {_id: business._id}});
    }
  };

  const clientInStorage = localStorage.getItem('userId');
  // console.log(clientInStorage, business._id);

  return (
    <div className="BusinessCard-container">

      <div className="BusinessPhoto-container">
        <img className='Login-image' src={require('../images/image-placeholder.png')} alt='login cartoon'></img> :
      </div>

      <div className="BusinessName-container">
        <Link to='/business-profile' state={{business}}><strong>{business.businessName}</strong></Link>
        <small>{business.businessCategory}</small>
      </div>

      <div className="BusinessContact-container">
        <span><em>{business.contactNumber}</em></span>
        <span><em>{business.streetNumber} {business.streetName}</em></span>
        <span><em>{business.email}</em></span>
      { business._id === clientInStorage && 
        <button onClick={() => { deleteBusiness() }}>Delete</button>
			}
      </div>


    </div>
  );
};

export default BusinessCard;