import React from 'react'
import {Link} from 'react-router-dom';

function Detail(props) {

  const { 
    name, nativeName,
     population, 
     capital,flag, 
     region, 
     subregion, 
     topLevelDomain, 
     currencies,
     languages,
     borders,
    } = props.country;

    let languageText = '';
    for(let i = 0; i < languages.length; i++){
      languageText += languages[i].name;
      languageText += " ";
    }
    

  console.log(props.country);
  return (
    <>
      <section className="back">
        <div className="container">
            <Link className="back-btn" to="/"> <i className="fas fa-arrow-left"></i> Back</Link>
        </div>
      </section>

      
      <section className="country-details container">
        <div className="country-details--left">
          <img className="country-details__flag" src={flag} alt="flag" />
        </div>
        <div className="country-details--right">
          <h2 className="country-details__title">{name}</h2>
          <div className="country-details__properties">
            <ul className="country-details__properties--left">
              <li className="item"><b>Native Name:</b> {nativeName}</li>
              <li className="item"><b>Population:</b> {population}</li>
              <li className="item"><b>Region:</b> {region}</li>
              <li className="item"><b>Sub-region:</b> {subregion}</li>
              <li className="item"><b>Capital:</b> {capital}</li>
            </ul>
            <ul className="country-details__properties--right">
              <li className="item"><b>Top Level Domain:</b> {topLevelDomain}</li>
              <li className="item"><b>Currencies:</b> {currencies[0].name}</li>
              <li className="item"><b>Languages:</b> {languageText}</li>
              
            </ul>
          </div>
          <div className="country-details__border">
            <h3>Border Countries: </h3>
            <ul className="country-details__border-list">
              {borders.map((border, index) => <li key={index} className="border-item">{border}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Detail;
