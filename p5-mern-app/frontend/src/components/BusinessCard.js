const BusinessCard = ({array}) => {

  const { businessName, businessCategory } = array;

  return (
    <div>
      {businessName}{businessCategory}
    </div>
  );
};

export default BusinessCard;