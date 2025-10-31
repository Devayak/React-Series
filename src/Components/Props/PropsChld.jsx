// import React from 'react'

// function PropsChld({cars}) {
//    const{ brand, model, color = "blue" }=cars
//   return (
//     <h2>My {brand} {model} is {color}!</h2>
//   );
// }

// export default PropsChld


//! for loop 

// export default function PropsChld({ cars }) {
//   const carItems = [];
//   for (let i = 0; i < cars.length; i++) {
//     carItems.push(<li key={i}>{cars[i]}</li>);
//   }
//   return <ul>{carItems}</ul>;
// }

//! forEach()

// function PropsChld({ items }) {
//   const listItems = [];
//   items.forEach((item, index) => {
//     listItems.push(<li key={index}>{item}</li>);
//   });

//   return <ul>{listItems}</ul>;
// }

// export default PropsChld


// import './parent.css'

const PropsChld=({fruitName , season,x})=>{
    return(
        <div className='mainDiv'>
            <ul>
                <li>{fruitName } {season}</li>
                {/* <li>{}</li> */}
            </ul>
            <h1>{x}</h1>
        </div>
    )

}




export default PropsChld