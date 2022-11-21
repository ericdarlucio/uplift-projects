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
      const registerCredentials = action.payload;

      // Backend
      axios.post('http://localhost:8080/api/v1/businesses/register', registerCredentials).then(result => {
        alert(result.data.status);
      });

      // Frontend
      return({ 
        ...state,
        businesses: [ ...state.businesses, registerCredentials] 
      });

    case 'UPDATE_BUSINESS':

      const updateCredentials = action.payload.business;
      const updateId = action.payload._id;

      // Backend
      axios.put(`http://localhost:8080/api/v1/businesses/${updateId}`, updateCredentials).then(result => {
        alert(result.data.status);
      })

      //Frontend
      return state;

    case 'DELETE_BUSINESS':

      const deleteId = action.payload._id;
      
      // Backend
      axios.delete(`http://localhost:8080/api/v1/businesses/${deleteId}/delete`).then(result => {
        alert(result.data.status);
      });

      // Frontend
      return ({
        ...state,
        businesses: state.businesses.filter( business => business._id !== action.payload._id )
      });

    case 'LOGIN_BUSINESS':

      const loginCredentials = action.payload;
      console.log(loginCredentials);

      axios.post('http://localhost:8080/api/v1/businesses/login', loginCredentials).then(result => {
        alert(result.data.status);
      })

      return state;


    default:
      return state;
  };
};

export default reducer;
