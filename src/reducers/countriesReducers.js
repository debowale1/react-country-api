export const fetchCountriesReducer = (state ={ countries: [] }, action) => {
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
export const fetchCountryReducer = (state ={ country: [] }, action) => {
  switch (action.type) {
    case 'FETCH_COUNTRY_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_COUNTRY_SUCCESS':
      return {
        loading: false,
        country: action.payload
      }
    case 'FETCH_COUNTRY_FAIL':
      return {
        loading: false,
        error: action.payload
      }  
    default:
      return state;
  }
}