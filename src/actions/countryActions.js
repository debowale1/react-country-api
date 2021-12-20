import axios from 'axios'
export const fetchAllCountries = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_ALL_COUNTRIES_REQUEST'})
    // make the api call
    const { data } = await axios.get('https://restcountries.com/v3.1/all')

    dispatch({ type: 'FETCH_ALL_COUNTRIES_SUCCESS', payload: data })
  } catch (error) {
    dispatch({ type: 'FETCH_ALL_COUNTRIES_FAIL', payload: error.response.data.message })
  }
}