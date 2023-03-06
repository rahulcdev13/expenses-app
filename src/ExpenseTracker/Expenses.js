import React, { useState } from 'react'; 
import ExpenseItem from './ExpenseItem';
import AddExpenses from './AddExpenses';

const dummy_expensesList = [
  {
    id: "1",
    title: "School fess Only",
    price: "1500",
    date: new Date().toLocaleDateString(),
    desc: "This is the task and need to completes as soon as possible todays"
  }
];

const Expenses = () => {

  const [newExpenseAdd, setNewExpenseAdd] = useState(dummy_expensesList);
 
  const saveExpenseDataHandler = (getChildToParentExpense) => {
    const updateExpenses = [getChildToParentExpense, ...newExpenseAdd];
    setNewExpenseAdd(updateExpenses);
    console.log(updateExpenses);
  }

  return (
    <>
      <div style={{ backgroundColor: "#98e9d6" }}><br />
          <div className='container' >
            <AddExpenses saveExpenseData={saveExpenseDataHandler} />
            <ExpenseItem expensesList={newExpenseAdd} />
          </div>        
          <br /><br />
        </div> 
    </>
  )
}

export default Expenses
