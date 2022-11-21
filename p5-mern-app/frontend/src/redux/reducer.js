import axios from "axios";

const initialState = {
  businesses: [ ]
};

const reducer = ( state = initialState, action ) => {

  switch( action.type ) {

    case 'FETCH':
      return ({
        ...state,
        businesses: action.payload.data
      });

    case 'REGISTER_BUSINESS':
      const credentials = action.payload;

      // Backend
      axios.post('http://localhost:8080/api/v1/businesses/register', credentials).then(result => {
        alert(result.data.status);
      });

      // Frontend
      return({ 
        ...state,
        businesses: [ ...state.businesses, credentials] 
      });

    case 'UPDATE_BUSINESS':

      console.log(action.payload);

      //Frontend
      return state;

    case 'DELETE_BUSINESS':
      
      // Backend
      axios.delete(`http://localhost:8080/api/v1/businesses/${action.payload._id}/delete`).then(result => {
        alert(result.data.status);
      });

      // Frontend
      return ({
        ...state,
        businesses: state.businesses.filter( business => business._id !== action.payload._id )
      });


    default:
      return state;
  };
};

export default reducer;
