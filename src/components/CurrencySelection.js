import React, { useState } from 'react';
// import { AppContext } from '../context/AppContext';

const CurrencySelection = () => {

    const [currency, setCurrency] = useState('');


    const handleChange = (event) => {
        setCurrency(event.target.value);
    };


    return (

        <select className="greenSelect" id="inputGroupSelect06" onChange={handleChange}>
            <option defaultValue>Select...</option>
            <option value="$ Dollar" name="dollar"> $ Dollar</option>
            <option value="£ Pound" name="pound">£ Pound</option>
            <option value="€ Euro" name="euro">€ Euro</option>
            <option value="₹ Ruppee" name="ruppee">₹ Ruppee</option>

        </select>

    );
};

export default CurrencySelection;
