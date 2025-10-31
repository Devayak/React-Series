import React, { useState } from "react";

const Expense = ({ setdatas }) => {

  const [formData, setFormdata] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [errors,setError]=useState({})

  //!form validation logic 

   const validateForm=(datas)=>{
    const newError={}
    if(!datas.title ){
      newError.title='Title is required'

    }
    if(!datas.category){
      newError.category='category is required'

    }
    if(!datas.amount){
       newError.amount='amount is required'

    }
    setError(newError)
    return newError
    
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const validResult=validateForm(formData);
    if(Object.keys(validResult).length) return 

    //!using js mehod or logic
    // console.log(e.target);
    // console.log(getFormData(e.target));

    //! logic add the list by using add button to the form
    setdatas((prevdata)=>[...prevdata,{...formData, id: crypto.randomUUID() }])

    //! logic to reset
    setFormdata({
      title: "",
    category: "",
    amount: "",
    })
    
setError({})
   
  };

 


  return (
    <div>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={formData.title}
            type="date"
            onChange={(e) =>
              setFormdata((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
          <p>{errors.title}</p>
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            style={{ padding: "7px" }}
            name="category"
            value={formData.category}
            onChange={(e) => setFormdata((prevState) => ({
                ...prevState,
                category: e.target.value,
              }))}
          >
            <option value="">All</option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
          <p>{errors.category}</p>
          {/* <input id="category" /> */}
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={(e) => setFormdata((prevState) => ({
                ...prevState,
                amount: e.target.value,
              }))}
          />
          <p>{errors.amount}</p>
        </div>
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default Expense;


 