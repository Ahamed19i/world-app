
import React from 'react';

const Card = ( {country} ) => {
    return (
        <div className="card">
            <img 
                src= {country.flags.svg} 
                alt= {"Drapeau " + country.translations.fra.common} 
            />
            <div className="infos">               
                <h2> {country.translations.fra.common} </h2>
                <h4>{country.capital} </h4>
                <p>{country.population.toLocaleString()} hab </p>
                <p> {country.area.toLocaleString()} km </p>
            </div>
        </div>
    );
};

export default Card;