import React, {useState, useEffect} from 'react'
// import {Consumer} from '../../context';
import {useParams} from 'react-router-dom';

import Detail from '../layouts/Detail';


const Details = () => {
  const {name} = useParams();

  const [country, setCountry] = useState([]);

  const getCountry = async (name) => {
    const resp = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    const country = await resp.json();
    setCountry(country);
  }

  useEffect(() => {
    getCountry(name);
  }, [name]);

  return (
    <div>
      {/* <h1>country: {name}</h1>  */}
      {country.map(c => {
        const { alpha2Code} = c;
        return <Detail key={alpha2Code} country={c} />        
      })}
    </div>
    
  )
}

export default Details;