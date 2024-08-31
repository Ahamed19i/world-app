import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [selectedContry, setSelectedContry] = useState("");
  const [rangeValue, setRangeValue] = useState(5);
  const radio = ["Africa", "America", "Asia", "Europe", "Oceania"];
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radio.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedContry}
              onChange={(e) => setSelectedContry(e.target.id)}
            />
            <label htmlFor={continent}> {continent} </label>
          </li>
        ))}
      </ul>
      {selectedContry && (
        <button onClick={() => setSelectedContry("")}>
          Annuler la recherche
        </button>
      )}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedContry))
          .sort((a, b) => b.area - a.area)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
