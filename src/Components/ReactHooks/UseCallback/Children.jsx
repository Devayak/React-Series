import React from "react";

function Children({ demo }) {
  console.log('child render');
  return <h3>Hello {demo}</h3>;
}

export default React.memo(Children)