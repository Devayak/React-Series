//! props are the just like arguments to function similarly props are arguments to child coponents 
//? wayto pass data from parent component to child component
// props are immutable in child component they can only be read in child component but cannot be changed
// can pass any data type as props like string number object function  array



//Props are a JavaScript object that is passed from parent to child React components and contains all the configuration/data attributes set on that component instance, enabling customization and communication between components


//Default props in React mean that if a parent component does not provide a value for a specific prop, then the value specified as the default, either through destructuring defaults or defaultProps, will be used inside the child component.

// import React from 'react'
// import PropsChld from './PropsChld'

// const carInfo={brand:"Ford", model:"Mustang", year:1969}

// const Props=()=>{
//     return(
//         // <PropsChld car='Defender'/> //string
//         // <PropsChld carModel={1234567}/>  // number
//         // <PropsChld cars={['jaguar','Defender']}/>
//          <PropsChld cars={carInfo}/>
//     )
// }
// export default Props

import PropsChld from "./PropsChld";

//! for loop 

// export default function Props() {
//   const cars = ['Honda', 'Toyota', 'BMW'];
//   return <PropsChld cars={cars} />;
// }

//! for each

// function Props() {
//   const fruits = ['Apple', 'Banana', 'Cherry'];
//   return <PropsChld items={fruits} />;
// }

// export default Props


//? Drawback is that 
    // 1. no return value foreach and for always give undefined
    //2. manually ccreate array and push result in more code of line
    //3. potential error it we miss to create and push element to array can cause big

    //! proptype are before 2017

//     const items = [];
// for (let i = 0; i < fruits.length; i++) {
//   items.push(
//     <PropsChld 
//       key={i}
//       fruitName={fruits[i].fruitName} 
//       season={fruits[i].season}
//       x={x}
//     />
//   );
// }  //! for loop 
//? no return value 
//? more code of line (more verbosse)
//? if we miss to create and push element to array cause error




    //! that why always preffered using map method

    const Props=()=>{
        const fruits=[
            {fruitName:'apple',season:'summer'},
            {fruitName:'mango',season:'winter'},
            {fruitName:'orange',season:'summer'}
        ]
        const x=()=>{
            return 'hello'
        }
        return(
            
            fruits.map((item)=>{
                return(<PropsChld fruitName={item.fruitName} season={item.season} x={x}/>)
            })
        )
    }
    
    export default Props //? always preffered map method to pass props (means when require to pass data from parent to child )