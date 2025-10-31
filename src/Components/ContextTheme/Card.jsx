import React, { useContext } from 'react';
import Context from './Contexts/Context';

const Card = () => {
    const{theme}=useContext(Context)
  return (
    <div style={{
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '16px', 
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
      maxWidth: '300px',
      margin: '10px auto',
      textAlign: 'center',
      backgroundColor:theme==='light'?'#fff':"#333",
      color:theme==='light'?'#000':'#fff'
    
    }}>
      <h2>Simple Card</h2>
      <p>This is a simple card component with some text content.</p>
    </div>
  );
};

export default Card;
