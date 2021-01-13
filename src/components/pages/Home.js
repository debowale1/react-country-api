import React, { Component } from 'react'
import {Consumer} from '../../context';
import CountryCard from '../layouts/CountryCard';

class Home extends Component {
  state = { 
    name: '',
   }

   

   onChange = (e) => {
    this.setState({name: e.target.value});
   }

   onSubmit = (e) => {
     e.preventDefault();
     console.log(this.state.name);
   }

  //  onFilterSubmit = (e) = {

  //    console.log(e.target.select);
  //  }

  render() {
    const {name} = this.state;

    return (
      <Consumer>
        {value => {
          const {countries} = value;
          return (
            <>
            <div className="forms-container">
            <form onSubmit={this.onSubmit} className="name-search-form" id="name-search-form">
              <input 
                type="text" 
                className="name-search-form__input" 
                placeholder="search for a country..."
                name='name'
                value={name}
                onChange={this.onChange}
              />
              <input type="submit" style={{display:"none"}} />
            </form>
            <form onSubmit={this.onFilterSubmit} className="filter-form" id="filter-form">
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
            {countries.map(country => <CountryCard key={country.alpha2Code} country={country} />)}      
          </div>
          </>
          );
        }}
      </Consumer>
    )



    // return ( 
    //   <Consumer>
      
    //   </Consumer>
    //  );
  }
}
 
export default Home;