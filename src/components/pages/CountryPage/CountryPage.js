import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CountryPage.css';

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
        <div className="CountryPage">
            {country.map((c) => {
            const {numericCode, flag, name, population, region, capital, nativeName, subregion, borders, languages, currencies, demonym, topLevelDomain} = c
            return (
                <div key={numericCode}>
                    <div className="country-pg__back-btn-container">
                        <Link className="country-pg__back-btn" to={`/`}><i class="fas fa-long-arrow-alt-left"></i> Back</Link>
                    </div>
                    <div className="country-pg__container">
                        <div className="country-pg__col-1">
                        <img className="country-pg__img" src={flag} alt={name} />
                        </div>

                        <div className="country-pg__col-2">
                        
                        <h1 className="country-pg__name">{name}</h1>
                        <div className="country-pg__container-2">
                        <div className="country-pg__inner-col-1">
                        <p className="country-pg__native-name"><strong>Native Name:</strong> {nativeName}</p>
                        <p className="country-pg__population"><strong>Population:</strong> {population.toLocaleString("en-GB")}</p>
                        <p className="country-pg__region"><strong>Region:</strong> {region}</p>
                        <p className="country-pg__sub-region"><strong>Sub-Region:</strong> {subregion}</p>
                        <p className="country-pg__capital"><strong>Capital:</strong> {capital}</p>
                        <p className="country-pg__demonym"><strong>Demonym:</strong> {demonym}</p>
                        </div>
                     
                        <div className="country-pg__inner-col-2">
                        <p className="country-pg__domain"><strong>Top-Level Domain:</strong> {topLevelDomain}</p>
                        <p className="country-pg__currency"><strong>Currency:</strong> {currencies[0].name}</p>
                        <p className="country-pg__language"><strong>Languages:</strong> {languages[0].name}</p>
                        </div>
                        </div>
                 
                        <div className="country-pg__border-countries-container">
                        <h3 className="country-pg__border-countries">Border Countries:</h3>
                        <div className="country-pg__borders">
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
                    </div>
                </div>
            )
            })}
        </div>
    );
}

export default CountryPage;