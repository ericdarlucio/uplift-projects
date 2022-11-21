import axios from "axios";

const initialState = {
  businesses: [ ]
};

const reducer = ( state = initialState, action ) => {

  switch( action.type ) {
    case 'FETCH':
      return {
        ...state,
        businesses: action.payload.data
      };

    case 'REGISTER_BUSINESS':
      const credentials = action.payload;
      axios.post('http://localhost:8080/api/v1/businesses/register', credentials).then(result => {
        alert(result.data.status);
      });

      return(
        { businesses: [ ...state.businesses, credentials] }
      );

    default:
      return state;
  }
}

export default reducer;
