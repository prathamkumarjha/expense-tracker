import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    return <form>
    <div className='new-expense__controls'>
        <div className='new_expense__control'>
            <label><strong>Title</strong></label>
            <input type="text"></input>
        </div>
        <div className='new_expense__control'>
            <label><strong>Amount</strong></label>
            <input type="number" min="0.01" step="0.01"></input>
        </div>
        <div className='new_expense__control'>
            <label><strong>Date</strong></label>
            <input type="date" min="2019-01-01" max="2025-01-01"></input>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add expense</button>
        </div>
    </div>
</form>
};
export default ExpenseForm;