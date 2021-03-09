import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Countries from './Countries';
const Main = () => {
    // initialize states
    const [allCountries, setAllCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // fetch data from rest countries api
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                setAllCountries(data);
            })
            .catch(error => console.log(`Error: ${error}`))
    }, []);
    return (
        <>
            <div>
                <Navbar countriesToSearch={allCountries} />
                {isLoading ? <p>Countries loading...</p> : <Countries allCountries={allCountries} />}
            </div>
        </>
    );
}

export default Main;