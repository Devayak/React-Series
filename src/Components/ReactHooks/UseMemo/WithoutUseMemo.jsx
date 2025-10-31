import React, { useState } from 'react'

const WithoutUseMemo = () => {
    const [count, setCount] = useState(0);

  // 👇 Expensive calculation
  const heavyCalculation = () => {
    console.log("Heavy calculation running...");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  };
  const result=heavyCalculation();
  return (
    <div>
        <h3>Result: {result}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase Count ({count})
      </button>
    </div>
  )
}

export default WithoutUseMemo