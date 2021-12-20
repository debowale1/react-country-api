import React from 'react'
import {Link} from 'react-router-dom';


function CountryCard(props) {
  const {name, flags, population, region, capital} = props.country;
  console.log(props.country);
  return (
    <div className="countries__flag">
      <img src={flags.png} alt="flag" className="countries__flag-image"/>
      <div className="countries__short-details">
        <h3 className="countries__name"><Link to={`${name.common}/details`}>{name.common}</Link></h3>
        <ul className="countries__properties">
          <li className="countries__property"><b>Population:</b>{population}</li>
          <li className="countries__property"><b>Region:</b> {region}</li>
          <li className="countries__property"><b>Capital:</b>{capital}</li>
        </ul>
      </div>
    </div>
  )
}

export default CountryCard;