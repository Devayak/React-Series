import React, { useState } from "react";

const Expense = ({setdatas}) => {
  const [expense,setexpense]=useState(
    {
      title:'',
      category:'',
      amount:''
    }
  )
  const[error,setError]=useState('')
// console.log(expense);



const handleChange=(e)=>{
    console.log(e.target);
    const{name,value}=e.target
    setexpense((prevState)=>({...prevState,
      [name]:value
    }))
    setError({})
  }


  const HandleError=( formData)=>{
    const errorData={}
    if(!formData.title){
      errorData.title='Title is required'
    }
    if(!formData.category){
      errorData.category='select category'
    }
    if(!formData.amount){
      errorData.amount='Amount is required'
    }
    setError(errorData)
    return(errorData)

  }
console.log(expense);

  const handleSubmit=(e)=>{
    e.preventDefault()
    const validation=HandleError(expense)
    console.log(validation);
    console.log(Object.keys(validation));
    if(Object.keys(validation).length) return

    //!using js mehod or logic
    // console.log(e.target);
    // console.log(getFormData(e.target));

//?add the list by using add button to the form

// 
// console.log(expenses);
setdatas((prevData)=>[...prevData,{...expense,id:crypto.randomUUID()}])
// e.target.reset()//! this will not work
setexpense({
  title:'',
  category:'',
  amount:''
})
// setdatas((prevstate) => [...prevstate, { ...getFormData(e.target), id: crypto.randomUUID() }])  //!using js mehod or logic

}

  

  // const getFormData=(form)=>{
  //   const formData = new FormData(form);
  //   const data={}
  //   for (const [key,value] of formData) {
  // data[key]=value
  //   }
  //   return data

  // }


  return (
    <div>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" value={expense.title}  onChange={handleChange}/>
          <label className="text-red-400 absolute top-[3.5em] ">{error.title}</label>
        </div>
        <div className="input-container">
          <label htmlFor="category" className="mt-3">Category</label>
          <select style={{padding:'6px',marginBottom:'10px'}} name="category" value={expense.category} onChange={handleChange}>
                  <option value="" style={{margin:'20px'}}>All</option>
                  <option value="grocery">Grocery</option>
                  <option value="clothes">Clothes</option>
                  <option value="bills">Bills</option>
                  <option value="education">Education</option>
                  <option value="medicine">Medicine</option>
                </select>
                  <label className="text-red-400 absolute top-[5em] ">{error.category}</label>
          {/* <input id="category" /> */}
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input id="amount" name="amount" value={expense.amount} onChange={handleChange}/>
            <label className="text-red-400 absolute top-[3.5em] ">{error.amount}</label>
        </div>
        <button className="add-btn"  style={{marginTop:'20px'}}>Add</button>
      </form>
    </div>
  );
};

export default Expense;
