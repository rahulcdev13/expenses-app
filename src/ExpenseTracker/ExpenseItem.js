import React from 'react'
import "./ExpenseItem.css" 

const ExpenseItem = (props) => {
    return (
        <>
            <div className='container'> 
                <div className='expenses'>
                    {props.expensesList.length === 0 ? <span style={{color:"white"}}>No Expenses added to display here..</span> :
                        props.expensesList.map((currVal,ind) => {
                            return (
                                <div className='expense-item' key={ind}>
                                    {/* {<p className="hidden" >{ind+1}</p>} */}
                                    <div className='expense_date'> {currVal.date}  </div>
                                    <div className='expense-item__description'>
                                        <h2>{currVal.title}</h2>
                                        <div className='expense-item__price'>$ {currVal.price}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ExpenseItem
