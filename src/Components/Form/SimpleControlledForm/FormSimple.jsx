import React, { useState } from 'react'
import './Index.css'
import Expense from './Expense'
import ExpenseTable from './ExpenseTable'


const FormSimple = () => {
    const data=[
         {id: crypto.randomUUID(), title: 'Milk', category: 'Grocery', amount: '40'},
  {id: crypto.randomUUID(), title: 'Shirts', category: 'Clothes', amount: '600'},
  {id: crypto.randomUUID(), title: 'Vegetables', category: 'Grocery', amount: '100'},
  {id: crypto.randomUUID(), title: 'Electricity Bill', category: 'Bills', amount: '1000'}
    ]

    const [datas,setdatas]=useState(data)

    
  return (
    <div>
        <h1>Track Your Expense</h1>
      <div className="expense-tracker">
      <Expense setdatas={setdatas}/>
       
           {/* { data.map((item)=>{
                return(<ExpenseTable key={item.id} Title={item.Title} Category={item.Category} Amt={item.Amount}/>)
            })} */}
            <ExpenseTable data={datas}/>
        
        
        
      </div>
    </div>
  )
}

export default FormSimple