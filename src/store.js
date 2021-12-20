import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { fetchCoutriesReducer } from './reducers/countriesReducers'

const initialState = {}

const reducers = combineReducers({
  fetchCountries: fetchCoutriesReducer
})

const middleware = [thunk]


const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store