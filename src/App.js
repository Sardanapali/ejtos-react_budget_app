import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import CurrencySelection from './components/CurrencySelection';
import PieChart from './components/piechart';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <h3 className='mt-3'>Budget</h3>
                <div className='row mt-3'>
                <div className='col-sm'>   
                   <PieChart></PieChart> </div>
             
                    <div className='col-sm'>
                        <Budget />
                        <CurrencySelection />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                        <ExpenseTotal />
                    </div>
                   
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
         
        </AppProvider>
    );
};

export default App;