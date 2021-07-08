import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {


    const [expenseButton, setExpenseButton] = useState(true);

    const saveExpense = data => {
        const createdExpense = {
            ...data,
            id: Math.random()
        }
        props.onAddExpense(createdExpense)
        setExpenseButton(true)
    }

    const addFormHandler = (e) => {
        e.preventDefault();
        setExpenseButton(false);
    };

    const cancelFormHandler = (e) => {
        e.preventDefault()
        setExpenseButton(true)
    }
    


    return (
        <div className="new-expense">
            { expenseButton && <button onClick={addFormHandler}>Add New Expense</button>}
            { !expenseButton && <ExpenseForm onSaveExpenseData={saveExpense} onCancelForm={cancelFormHandler} />}
        </div>
    )
}

export default NewExpense
