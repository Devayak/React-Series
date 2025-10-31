import React, { useState } from 'react'
import './Index.css'
import Expense from './ExpenseForm'
import ExpenseTable from './ExpenseTable'
import ExpenseForm from './ExpenseForm'

const Form = () => {
    const data=[
  {id: crypto.randomUUID(), title: 'Milk', category: 'Grocery', amount: '40'},
  {id: crypto.randomUUID(), title: 'Shirts', category: 'Clothes', amount: '600'},
  {id: crypto.randomUUID(), title: 'Vegetables', category: 'Grocery', amount: '100'},
  {id: crypto.randomUUID(), title: 'Electricity Bill', category: 'Bills', amount: '1000'}
    ]

    const [datas,setdatas]=useState(data)

    
  return (
    <div style={{margin:'10%'}}>
        <h1 className='text-4xl mb-8 relative left-[15%] text-red-500'>Track Your Expense</h1>
      <div className="expense-tracker">
      <ExpenseForm setdatas={setdatas}/>
       
           {/* { data.map((item)=>{
                return(<ExpenseTable key={item.id} Title={item.Title} Category={item.Category} Amt={item.Amount}/>)
            })} */}
            <ExpenseTable data={datas}/>
        
        
        
      </div>
    </div>
  )
}

export default Form