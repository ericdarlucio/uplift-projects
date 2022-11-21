const BusinessCard = ({businesses}) => {

  const { businessName, businessCategory } = businesses;

  return (
    <div>
      <span><strong>{businessName}</strong></span>
      <br></br>
      <span><em>{businessCategory}</em></span>
      <br></br>
    </div>
  );
};

export default BusinessCard;