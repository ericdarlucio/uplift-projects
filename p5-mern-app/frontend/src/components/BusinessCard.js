import { Link } from "react-router-dom";

const BusinessCard = ({businesses}) => {

  const { email , businessName, businessCategory, contactNumber, streetNumber, streetName } = businesses;
  console.log(businesses);

  return (
    <div>
      <Link to='/business-profile/' state={email}><strong>{businessName}</strong></Link>
      <br></br>
      <span><em>{contactNumber}</em></span>
      <br></br>
      <span><em>{streetNumber} {streetName}</em></span>
      <br></br>
      <span><em>{businessCategory}</em></span>
      <br></br>
    </div>
  );
};

export default BusinessCard;