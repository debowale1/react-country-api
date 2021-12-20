import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryCard from '../layouts/CountryCard';
import Loader from '../../components/Loader'
import {fetchAllCountries} from '../../actions/countryActions'

const Home = () => {   
  const dispatch = useDispatch()

  const fetchCountries = useSelector(state => state.fetchCountries)
  const { countries, loading, error } = fetchCountries

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  //  const onChange = (e) => {
  //    const {name} = e.target;
  //   this.setState({[name]: e.target.value});
  //  }

  //  const onSubmit = (e) => {
  //    e.preventDefault();
  //    console.log(this.state.name);
  //  }
   return (        
          <>
          <div className="forms-container">
          <form className="name-search-form" id="name-search-form">
            <input 
              type="text" 
              className="name-search-form__input" 
              placeholder="search for a country..."
              name='name'
              // value={}
              // onChange={onChange}
            />
            <input type="submit" style={{display:"none"}} />
          </form>
          <form  className="filter-form" id="filter-form">
            <select className="filter-form__filter" name="countries-filter" id="countries-filter">
              <option value="">Filter By Region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </form>
        </div>
        <div className="countries__flags">  
          {loading && <Loader />}
          {error && error}
          {countries.map((country, id) => <CountryCard key={id} country={country} />)}      
          
        </div>
        </>
        );
}

 
export default Home;