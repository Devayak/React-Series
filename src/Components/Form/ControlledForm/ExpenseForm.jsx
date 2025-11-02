
import React, { useState } from "react";
import Input from "./CustomFormField/Input";
import Select from "./CustomFormField/Select";

const Expense = ({setdatas}) => {
  const [expense,setexpense]=useState(
    {
      title:'',
      category:'',
      amount:'',
      email:''
    }
  )
  const[error,setError]=useState('')

  //! check validation logic improvement
  const validationConfig={
    title:[{required:true,message:'Title is required'},{minLength:5,message:'Title should be min 5 char'}],
    category:[{required:true,message:'Select category'}],
    amount:[{required:true,message:'Amount is rwquired'}],
    email:[{required:true,message:'Email is required'},{regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:'Invalid email format'}]
  }




const handleChange=(e)=>{
    console.log(e.target);
    const{name,value}=e.target
    setexpense((prevState)=>({...prevState,
      [name]:value
    }))
    setError({})
  }

const handleValidation=(formData)=>{
  const errorData={}

  Object.entries(formData).forEach(([key,value])=>{

  validationConfig[key].some((ruke)=>{
    if(ruke.required && !value){
      errorData[key]=ruke.message
      return true
    }

    if(ruke.minLength && value.length<ruke.minLength){
      errorData[key]=ruke.message
        return true
    }

    if(ruke.regex && !ruke.regex.test(value)){
      errorData[key]=ruke.message
      return true
    }
  })
  })
  setError(errorData)
  return(errorData)

}
 
console.log(expense);

  const handleSubmit=(e)=>{
    e.preventDefault()
    const validation=handleValidation(expense)
    
    console.log(Object.keys(validation));
    if(Object.keys(validation).length) return

    

//?add the list by using add button to the form


setdatas((prevData)=>[...prevData,{...expense,id:crypto.randomUUID()}])

setexpense({
  title:'',
  category:'',
  amount:'',
  email:''
})


}

  

 


  return (
    <div>
      <form className="expense-form" onSubmit={handleSubmit}>
        
        <Input label='title' id='title' name='title' value={expense.title} onChange={handleChange} error={error.title} />
     
        <Select id='category' label='Category' name='category' value={expense.category}onChange={handleChange} options={['Grocery','Milk','Bill','Education','Medicine']} defaultoption='Select Category' error={error.category}/>

        <Input label='Amount' id='title' name='amount' value={expense.amount} onChange={handleChange} error={error.amount} />
        <Input label='Email' id='email' name='email' value={expense.email} onChange={handleChange} error={error.email} />
        <button className="add-btn"  style={{marginTop:'20px'}}>Add</button>
      </form>
    </div>
  );
};

export default Expense;
