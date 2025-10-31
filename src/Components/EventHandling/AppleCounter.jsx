// import Button from "./Button"

// import LeftArrow from '../assets/images/left-arrow.png'
// import RightArrow from '../assets/images/right-arrow.png'
import AppleBasket from "./AppleBasket"

// import './AppleCounter.css'
import { createRoot } from 'react-dom/client'
const root=createRoot(document.getElementById('root')) //re-render method 


const totalAppleCounter=10;
let rightAppleCounter=0
let leftAppleCounter=totalAppleCounter-rightAppleCounter;
const AppleCounter = () => {
  const handleLeft = () => {
    leftAppleCounter--;
    rightAppleCounter++;
    console.log(leftAppleCounter);
    root.render(<AppleCounter/>) // re-render mthod 
  };

  const handleRight = () => {
    rightAppleCounter--;
    leftAppleCounter++;
    console.log(rightAppleCounter);
    root.render(<AppleCounter/>)  // re-render mthod 
  };

  return (
    <section>
        <AppleBasket appleCount={leftAppleCounter} basketName="Basket 1" />
        <button onClick={handleLeft}>left Arrow</button>
        
        <AppleBasket appleCount={rightAppleCounter} basketName="Basket 2" />
        <button onClick={handleRight}>right Arrow</button>
    </section>
  );
  
}

export default AppleCounter