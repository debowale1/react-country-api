import React from 'react'
import {Link} from 'react-router-dom';

const Detail = (props) => {

  const { 
    name,
     population, 
     capital,flags, 
     region, 
     subregion, 
     tld, 
     currencies,
     languages,
    } = props.country;
    

    const getCurrencies = () => {
      let currenciesText = '';
      for(let key in currencies){
        currenciesText += `${currencies[key].name} `
      }
      return currenciesText
    }

    const getLanguages = () =>{
      let languageText = '';
      for(let key in languages){
        languageText += `${languages[key]} `;
      }
      return languageText
    }
    
  return (
    <>
      <section className="back">
        <div className="container">
            <Link className="back-btn" to="/"> <i className="fas fa-arrow-left"></i> Back</Link>
        </div>
      </section>

      
      <section className="country-details container">
        <div className="country-details--left">
          <img className="country-details__flag" src={flags.png} alt="flag" />
        </div>
        <div className="country-details--right">
          <h2 className="country-details__title">{name.common}</h2>
          <div className="country-details__properties">
            <ul className="country-details__properties--left">
              {/* <li className="item"><b>Native Name:</b> {name.nativeName.nld.official}</li> */}
              <li className="item"><b>Population:</b> {population}</li>
              <li className="item"><b>Region:</b> {region}</li>
              <li className="item"><b>Sub-region:</b> {subregion}</li>
              <li className="item"><b>Capital:</b> {capital}</li>
            </ul>
            <ul className="country-details__properties--right">
              <li className="item"><b>Top Level Domain:</b> {tld}</li>
              <li className="item"><b>Currencies:</b> {getCurrencies()}</li>
              <li className="item"><b>Languages:</b> {getLanguages()}</li>
              
            </ul>
          </div>
          {/* <div className="country-details__border">
            <h3>Border Countries: </h3>
            
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Detail;
