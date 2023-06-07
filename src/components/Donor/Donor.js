import React from 'react';
import './Donor.scss';


const Donor = ({children,to}) => {
    return (
        
        <div className="donor">
           <a href={to}> <img src={children} alt="UNFPA_ logo" /></a>
        </div>
    )
}

export default Donor;
