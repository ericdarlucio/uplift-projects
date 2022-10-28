const OrderCard = ({array}) => {
  return (
    <div>
      <p>{array.firstName}</p>
      <p>{array.lastName}</p>
      <p>{array.streetAddress}</p>
      <p>{array.barangay}</p>
    </div>
  )
}

export default OrderCard