import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.newList.length === 0) {
    return <h2 className="expenses-list__fallback">No existen registros</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.newList.map((item) => (
        <ExpenseItem 
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  )
};
export default ExpensesList;
