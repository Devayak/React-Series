import React from "react";

const Navbar = ({ ShopNow, setProduct, setFilter}) => {
  return (
    <nav>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s" alt=""
        style={{ width: 50, marginTop: 5 }}
      />
      <div>
        <button className="btn" onClick={ShopNow}>Shop Now </button>
        <button className="btn" onClick={() => setProduct([])}>Exit Now</button>
      <button  className="btn" onClick={() => setFilter(4)}>Above 4</button>
        <button className="btn" onClick={() => setFilter(3)}>Above 3</button>
        <button className="btn" onClick={() => setFilter(2)}>Above 2</button>
      </div>

    </nav>
  );
}

export default Navbar;
