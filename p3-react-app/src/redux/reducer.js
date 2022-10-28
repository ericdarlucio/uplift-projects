const initialState = {
  allOrders: [
    {
      firstName: 'Princess',
      lastName: 'Robles',
      streetAddress: 'Chico Street',
      barangay: 'Pias',
      status: 'pending'
    }
  ]
};


const reducer = ( state = initialState, action ) => {

  switch(action.type) {
    case 'SUBMIT_ORDER':
      return(
        {allOrders: [...state.allOrders, {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          streetAddress: action.payload.streetAddress,
          barangay: action.payload.barangay,
          status: 'pending'
        }]}
      );
    default:
      return state;
  }
}

export default reducer;