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
                <article key={numericCode}>
                    <div>
                    <Link to={`/`}>Back</Link>
                        <h1>{name}</h1>
                        <img src={flag} alt={name} />
                        <h2>{population}</h2>
                        <h2>{region}</h2>
                        <h2>{capital}</h2>
                        <h2>{nativeName}</h2>
                        <h2>{subregion}</h2>
                        <h2>{topLevelDomain}</h2>
                        <h2>{currencies[0].name}</h2>
                        <h2>{demonym}</h2>
                        <h2>{languages[0].name}</h2>
                        
                        <div className="borders">
                        {borders.map((border) => {
                            return (
                                <ul key={border}>
                                    <li>{border}</li>
                                </ul>
                            )
                        })}
                        </div>
                      
                    </div>
                </article>
            )
            })}
        </div>
    )
}

export default CountryPage;
