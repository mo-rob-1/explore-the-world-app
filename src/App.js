import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/ui/Header/Header';
import CountryCard from './components/ui/CountryCard/CountryCard';
import CountryPage from './components/pages/CountryPage/CountryPage';
import Spinner from './components/ui/spinner/Spinner';
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
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/">
      <div className="input-container">
          <input
              type="text"
              placeholder="Search Countries"
              onChange={(e) => setSearch(e.target.value)}
          />
      </div>

      <section className="cards">
        {filteredCountries.map((country, idx) => 
        (
          <CountryCard key={idx} {...country} />
        ))}
      </section>

      </Route>

    </div>
    <Route path="/:name" component={CountryPage}></Route>
    </Router>
  );
}

export default App;
