import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import './App.css';
import Spinner from './components/ui/spinner/Spinner';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="App">
      <Header />

      <input
          type="text"
          placeholder="Search Countries"
          onChange={(e) => setSearch(e.target.value)}
      />

      <section className="cards">
        {filteredCountries.map((country, idx) => 
        (
          <CountryCard key={idx} {...country} />
        ))}
      </section>
    </div>
  );
}

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
  );
};

export default App;
