import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelection = () => {

    const { dispatch } = useContext(AppContext);

    const handleChange = (event) => {
        const currency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });

    };


    return (
        <div className='alert alert-secondary' >
              <span>Currency</span>
            <select className="greenSelect" id="inputGroupSelect06" onChange={handleChange}>
                <option defaultValue>...</option>
                <option value="$" name="dollar"> $ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>

            </select>
        </div>


    );
};

export default CurrencySelection;
