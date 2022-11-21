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
    default:
      return state;
  }
}

export default reducer;
