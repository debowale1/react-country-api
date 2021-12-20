import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Detail from '../layouts/Detail'
import { fetchCountryByName } from '../../actions/countryActions'
import Loader from '../Loader';



const Details = () => {
  const {name} = useParams();
  const dispatch = useDispatch()

  const fetchCountry = useSelector(state => state.fetchCountry)
  const { loading, country, error } = fetchCountry

  useEffect(() => {
    dispatch(fetchCountryByName(name))
  }, [dispatch, name]);

  return (
    <div>
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
      {country.map(c => {
        const { cca2 } = c;
        return <Detail key={cca2} country={c} />        
      })}
    </div>
    
  )
}

export default Details;