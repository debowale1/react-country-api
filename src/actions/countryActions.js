import axios from 'axios'
export const fetchAllCountries = (countryName = 'malta') => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_ALL_COUNTRIES_REQUEST'})
    // make the api call
    
    
    const {data}  = await axios.get('https://restcountries.com/v3.1/all')
    // const { data } = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
   

    dispatch({ type: 'FETCH_ALL_COUNTRIES_SUCCESS', payload: data })
  } catch (error) {
    dispatch({ type: 'FETCH_ALL_COUNTRIES_FAIL', payload: error.response.data.message })
  }
}
export const fetchCountryByName = (name) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_COUNTRY_REQUEST'})
    // make the api call
    const { data } = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    dispatch({ type: 'FETCH_COUNTRY_SUCCESS', payload: data })
  } catch (error) {
    dispatch({ type: 'FETCH_COUNTRY_FAIL', payload: error.response.data.message })
  }
}