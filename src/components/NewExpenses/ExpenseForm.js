import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');

    const  titleChangeHandler =  (event)=>{
        setEnteredTitle(event.target.value);
    }
    const [enteredAmount, SetEnteredAmount] = useState('');

    const amountChangeHandler=(event)=>{
        SetEnteredAmount(event.target.value);
    }

    const [enteredDate,setEnteredDate] = useState('');
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
      const  expenseData ={
        title:enteredTitle,
        date:enteredDate,
        amount:enteredAmount
        }
        console.log(expenseData);

    }
        return <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new_expense__control'>
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className='new_expense__control'>
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
        </div>
        <div className='new_expense__control'>
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2025-01-01" onChange={dateChangeHandler}></input>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add expense</button>
        </div>
    </div>
</form>
};
export default ExpenseForm;
