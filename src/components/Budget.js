import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const { expenses } = useContext(AppContext);
     
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const { dispatch } = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {

        if (20000 < event.target.value) {
            alert("The budget cannot exceed 20000" + currency);
            return;
        } else if(event.target.value< totalExpenses){
            alert("You cannot reduce the budget lower than the total expenses");
            return;
        }

        setNewBudget(event.target.value);

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;

