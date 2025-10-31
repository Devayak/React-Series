import React from 'react'

const Demo = ({ name }) => {
     console.log("demo rendered");
  return (
    <div>{name}
    </div>
  )
}

export default React.memo(Demo)