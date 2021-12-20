import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { fetchCountriesReducer, fetchCountryReducer } from './reducers/countriesReducers'

const initialState = {}

const reducers = combineReducers({
  fetchCountries: fetchCountriesReducer,
  fetchCountry: fetchCountryReducer,
})

const middleware = [thunk]


const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store