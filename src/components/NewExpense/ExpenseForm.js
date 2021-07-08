import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    
    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
        
        
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2022-12-31" value={date} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
                <button onClick={props.onCancelForm}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm