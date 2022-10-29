const initialState = {
  allOrders: [
    {
      firstName: 'Princess',
      lastName: 'Robles',
      streetAddress: '707 Chico St',
      barangay: 'Pias',
      quantity: 1,
      status: 'pending'
    },
    {
      firstName: 'Eric',
      lastName: 'Darlucio',
      streetAddress: '51 Pico Ave',
      barangay: 'Coral',
      quantity: 1,
      status: 'collected'
    },
    {
      firstName: 'Roz',
      lastName: 'Dalope',
      streetAddress: '123 Abs St',
      barangay: 'Lambayan',
      quantity: 1,
      status: 'dispatched'
    },
    {
      firstName: 'Juan',
      lastName: 'Dela Cruz',
      streetAddress: '123 Mabolo St',
      barangay: 'Poblacion',
      quantity: 1,
      status: 'delivered'
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
          quantity: action.payload.quantity,
          status: action.payload.status
        }]}
      );
    case 'DELETE':
      return ({allOrders: state.allOrders.filter( order => order.firstName !== action.payload.firstName )});
    case 'MOVE_TO_COLLECTED':
      return ({allOrders: state.allOrders.map( order => {
        if (order.firstName === action.payload.firstName){
          order.status = 'collected';
          return order;
        } else { return order; }
      })});
      case 'MOVE_TO_DISPATCHED':
      return ({allOrders: state.allOrders.map( order => {
        if (order.firstName === action.payload.firstName){
          order.status = 'dispatched';
          return order;
        } else { return order; }
      })});
      case 'MOVE_TO_DELIVERED':
      return ({allOrders: state.allOrders.map( order => {
        if (order.firstName === action.payload.firstName){
          order.status = 'delivered';
          return order;
        } else { return order; }
      })});
    default:
      return state;
  }
}

export default reducer;