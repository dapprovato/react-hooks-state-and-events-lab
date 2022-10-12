import React , { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false)

  const itemClass = isAdded ? "in-cart" : ""

  function handleClick() {
    setIsAdded((isAdded) => !isAdded)
  }



  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className= {isAdded ? "remove" : "add"} onClick={handleClick}> {isAdded ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
