import { v4 as uuidv4 } from 'uuid';

const initialState = {
  allOrders: [
    {
      firstName: 'Jose',
      lastName: 'Rizal',
      contactNo: '09123456789',
      streetAddress: '123 Rizal St',
      barangay: 'Poblacion',
      quantity: 1,
      id: uuidv4().split('-')[4],
      status: 'pending'
    },
    {
      firstName: 'Pedro',
      lastName: 'San Pedro',
      contactNo: '09123123123',
      streetAddress: '321 Pedro Ave',
      barangay: 'Luyan',
      quantity: 1,
      id: uuidv4().split('-')[4],
      status: 'collected'
    },
    {
      firstName: 'Emilia',
      lastName: 'Jacinta',
      contactNo: '09234234234',
      streetAddress: '123 Makopa St',
      barangay: 'Pias',
      quantity: 1,
      id: uuidv4().split('-')[4],
      status: 'dispatched'
    },
    {
      firstName: 'Juan',
      lastName: 'Dela Cruz',
      contactNo: '09345345345',
      streetAddress: '123 Mabolo St',
      barangay: 'Coral',
      quantity: 1,
      id: uuidv4().split('-')[4],
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
          contactNo: action.payload.contactNo,
          streetAddress: action.payload.streetAddress,
          barangay: action.payload.barangay,
          quantity: action.payload.quantity,
          status: action.payload.status,
          id: action.payload.id
        }]}
      );

    case 'DELETE':
      return ({allOrders: state.allOrders.filter( order => order.firstName !== action.payload.firstName )});

    case 'MOVE_TO_COLLECTED':
      return ({allOrders: state.allOrders.map( order => {
        if (order.firstName === action.payload.firstName){
          order.status = 'collected';
          return order;
        } else {
          return order;
        }})}
      );

    case 'MOVE_TO_DISPATCHED':
      return ({allOrders: state.allOrders.map( order => {
        if (order.firstName === action.payload.firstName){
          order.status = 'dispatched';
          return order;
        } else { 
          return order; 
        }})}
      );

    case 'MOVE_TO_DELIVERED':
      return ({allOrders: state.allOrders.map( order => {
        if (order.firstName === action.payload.firstName){
          order.status = 'delivered';
          return order;
        } else { 
          return order; 
        }})}
      );

    default:
      return state;
  }
}

export default reducer;