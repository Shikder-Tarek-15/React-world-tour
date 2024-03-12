import { useEffect, useState } from "react";
import './Countries.css';
import Country from "./Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedCountry = country => {
        // console.log(country)
        console.log("Selected Country")
        const newVisited = [...visitedCountries, country]
        setVisitedCountries(newVisited)
        // console.log(newVisited)
    }

    const handleVisitedFlag = country => {
        setVisitedFlag([...visitedFlag, country])
    }

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=> res.json())
        .then(data=> setCountries(data))
    },[])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>Visited Country: {visitedCountries.length}</h3>
                <h3>Visited Flag: {visitedFlag.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country=> <li style={{display:"flex",alignItems: 'center', gap: '20px', margin:'20px'}} key={country.ccn3}>{country.name.common} <img style={{width: "80px"}} src={country.flags.png} alt="" /></li>)
                    }
                    {
                        // visitedFlag.map(country => <li key={country.ccn3}><img style={{width: "80px"}} src={country.flags.png} alt="" /></li>)
                    }
                </ul>

            </div>
            <div  className="country-container">
            {
                countries.map(country => <Country handleVisitedFlag = {handleVisitedFlag} handleVisitedCountry = {handleVisitedCountry} key={country.ccn3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;