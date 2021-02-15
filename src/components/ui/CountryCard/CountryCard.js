import React from 'react';
import './CountryCard.css';

const CountryCard = (props) => {
    const { name, flag, population, capital, region, demonym } = props;
    return (
        <div className="card">
            <div className="card-img-container">
                <img className='card-img' src={flag} alt={name} />
            </div>
            <div className="card-info-container">
                <ul>
                    <li>
                        <strong>Country:</strong> {name} 
                    </li>
                    <li>
                        <strong>Capital:</strong> {capital}
                    </li>
                    <li>
                        <strong>Region:</strong> {region}
                    </li>
                    <li>
                        <strong>Population:</strong> {population}
                    </li>
                    <li>
                        <strong>Demonym:</strong> {demonym}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CountryCard;
