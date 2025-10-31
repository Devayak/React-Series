import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import CardMain from './CardMain'
import Card from './Card';

const App1=()=>{
  const[products,setProduct]=useState([]);
  const [filter, setFilter] = useState(0);

  console.log('Rendered');
  const  fetchData=async()=>{
    const response=await fetch('https://fakestoreapi.com/products')
    const result=await response.json()
    setProduct(result)
  }
  
  useEffect(()=>{
    fetchData();
  },[])// empty array  dependency only allow to render for one time re-render on change is not allowed 
  const filteredProducts =products.filter((value) => value.rating.rate >=filter);

  return(
    <div>
        
        <Navbar logoText='Logo' ShopNow={fetchData} setProduct={setProduct} setFilter={setFilter}/>
      <CardMain prod={filteredProducts} />
        
    </div>
  )
}

export default App1