import React, { useState } from "react";
import ExpensesList from './ExpensesList'
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  };
  
  const filteredList = props.items.filter(x => x.date.getFullYear() === parseInt(filteredYear))

  return (
    <React.Fragment>
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onAddFilteredYear={filteredChangeHandler}
        />
        <ExpensesChart expenses={filteredList} />
        <ExpensesList newList={filteredList} />

       
      </div>
    </React.Fragment>
  );
};

export default Expenses;
