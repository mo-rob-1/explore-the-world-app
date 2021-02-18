import React from 'react';
import { Link } from "react-router-dom";
import './CountryCard.css';

const CountryCard = (props) => {
    const { name, flag, population, capital, region, demonym } = props;

    return (
        <Link className="card__link" to={`/${name}`}>
            <div className="card">
                <div className="card__img-container">
                    <img className='card__img' src={flag} alt={name} />
                </div>
                <div className="card__info-container">
                    <h3 className="card__country">{name}</h3>
                    <ul className="card__country-list-container">
                        <li className="card__country-list-item">
                            <p className="card__capital"><strong>Capital:</strong> {capital}</p>
                        </li>
                        <li className="card__country-list-item">
                            <p className="card__region"><strong>Region:</strong> {region}</p>
                        </li>
                        <li className="card__country-list-item">
                            <p className="card__population"><strong>Population:</strong> {population.toLocaleString("en-GB")}</p>
                        </li>
                        <li className="card__country-list-item">
                            <p className="card__population"><strong>Demonym:</strong> {demonym}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard;
