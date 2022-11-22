// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./BusinessCard.css";


const BusinessCard = ( {business} ) => {

  // const dispatch = useDispatch();

  // // Delete handler
  // const deleteBusiness = () => {
  //   const answer = window.confirm("Are you sure you want to delete this?");
  //   if (answer) {
  //     dispatch( {type: 'DELETE_BUSINESS', payload: {_id: business._id}});
  //   }
  // };

  const clientInStorage = localStorage.getItem('userId');
  // console.log(clientInStorage, business._id);
  const photoLength = business.photos.length;
  console.log(business.photos[0]);

  return (
    <div className="BusinessCard-container">

      <div className="BusinessPhoto-container">

        { photoLength === 0 ?
          <img className='Login-image' src={require('../images/image-placeholder.png')} alt='image placeholder'></img> :
          <img className='Login-image' src={`${business.photos[0]}`} alt='image placeholder'></img>
      }
      </div>

      <div className="BusinessName-container">
        <Link className="BusinessName" to='/business-profile' state={{business}}><strong>{business.businessName}</strong></Link>
        <span><em>{business.businessCategory}</em></span>{ business._id === clientInStorage && 
        <span>⭐</span>
			}
      </div>

      <div className="BusinessContact-container">
        <span><em>{business.contactNumber}</em></span>
        <span><em>{business.streetNumber} {business.streetName}</em></span>
        <span><em>{business.email}</em></span>
      </div>

    </div>
  );
};

export default BusinessCard;