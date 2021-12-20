export const fetchCoutriesReducer = (state ={ countries: [] }, action) => {
  switch (action.type) {
    case 'FETCH_ALL_COUNTRIES_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_ALL_COUNTRIES_SUCCESS':
      return {
        loading: false,
        countries: action.payload
      }
    case 'FETCH_ALL_COUNTRIES_FAIL':
      return {
        loading: false,
        error: action.payload
      }  
    default:
      return state;
  }
}