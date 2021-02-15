import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CountryCard from './components/ui/CountryCard';
import Spinner from './components/ui/Spinner/Spinner';
import './App.css';

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

<CountryCard />

export default App;
