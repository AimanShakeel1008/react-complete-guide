import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const filterYearChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterYearChange={filterYearChangeHandler}
        />
        {props.items
          .filter((item) => item.date.getFullYear().toString() === filterYear)
          .map((filteredItem) => (
            <ExpenseItem
              key={filteredItem.id}
              title={filteredItem.title}
              date={filteredItem.date}
              amount={filteredItem.amount}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
