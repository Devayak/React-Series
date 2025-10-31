//? components -> reusable building blocks of ui 

//! type of components
//? 1. functional components -> function that returns jsx(FBC) --> arrow function  but we can also use normal function
//? 2. class components -> es6 classes that extend react.component and have a render method that returns jsx (CBC) --> class keyword❌


//! rules to create a FBC
//? 1. component name ( function name) must start with a capital letter
//? 2. file name and componet name must be same (recommended)
//? 3. components are called in two ways -> self closing and opening-closing tag example-> <componentsname/> and <> componentsname </> recommended one is self closing tags

//! where javascript need to be write
//? before return statements 

//! whwere jsx need to be write 
//? inside return statements

//! imp note 
     //? inside the return statement it is not possible to declare a js variables but we can access it using {} 
import React from 'react';
import MainComponent from './MainComponent';
import Footer from './Footer';

// Creating a simple functional component
// function Components() {
//   return (
//     <h1>Hello, welcome to React!</h1>
//   );
// }//! this is done using function keyword not recommended always use arrow function

// function Car(){
//     return (
//         <h2>car</h2>
//     )
// }



const Components=()=>{
    // let name='Denasish'
    return (
        <>
        {/* <h1>Hello {name}, welcome to React!</h1>
        <Car/> */}
        <MainComponent/>
        <Footer/>
        </>
    
  );
}
export default Components;  //! arrow function is recommended





