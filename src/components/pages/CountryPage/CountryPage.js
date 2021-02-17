import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryPage = () => {
    const [country, setCountry] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        const country = await res.json();
        setCountry(country);
    }   
    fetchData();
    }, [name])

    return (
        <div>
            {country.map((c) => {
            const {numericCode, flag, name, population, region, capital, nativeName, subregion, borders, languages, currencies, demonym, topLevelDomain} = c
            return (
                <div key={numericCode}>
                    <Link to={`/`}>Back</Link>
                    <div className="country-pg__container">
                        <img src={flag} alt={name} />
                        <h1 className="country-pg__name">Name: {name}</h1>
                        <h4 className="country-pg__native-name">Native Name: {nativeName}</h4>
                        <h4 className="country-pg__population">Population: {population}</h4>
                        <h4 className="country-pg__region">Region: {region}</h4>
                        <h4 className="country-pg__sub-region">Sub-Region: {subregion}</h4>
                        <h4 className="country-pg__capital">Capital: {capital}</h4>
                        <h4 className="country-pg__domain">Top-Level Domain: {topLevelDomain}</h4>
                        <h4 className="country-pg__currency">Currency: {currencies[0].name}</h4>
                        <h4 className="country-pg__demonym">Demonym: {demonym}</h4>
                        <h4 className="country-pg__language">Language: {languages[0].name}</h4>
                        
                        <div className="country-pg__border-countries-container">
                        <h3 className="country-pg__border-countries">Border Countries:</h3>
                        {borders.map((border) => {
                            return (
                                <ul className="country-pg__border-list-container" key={border}>
                                    <li className="country-pg__border-list">{border}</li>
                                </ul>
                            )
                        })}
                        </div>
                    </div>
                </div>
            )
            })}
        </div>
    )
}

export default CountryPage;
