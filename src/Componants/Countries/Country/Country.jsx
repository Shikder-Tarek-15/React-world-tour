import { useState } from "react";
import "./Country.css";
const Country = ({country , handleVisitedCountry,handleVisitedFlag}) => {
    const {name, flags, cca2} = country;

    const [visited, setVisited] = useState(false);
    

    const handleVisited = () => {
        setVisited(!visited);
        
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name is: {name?.common}</h3>
            <img style={{width: "120px"}} src={flags.png} alt="" />
            <p><small>Initial: {cca2}</small></p>
            <button onClick={()=>{
                handleVisited()
                handleVisitedCountry(country)
                handleVisitedFlag(country)
            }}>{visited? "Visited": "Mark as visited"}</button>
           
        </div>
    );

};

export default Country;