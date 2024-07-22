import { useState } from "react";
import React from "react";

export default function Store() {
  const [cartCount, setCartCount] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState(1);

  return (
    <>
      <div className="product">
        <h2>Number of items in cart: {cartCount}</h2>
        <button onClick={() => setCartCount(cartCount + 1)}>Add to cart</button>
      </div>
    </>
  );
}
