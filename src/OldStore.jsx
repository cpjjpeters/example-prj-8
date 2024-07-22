import { useState } from "react";

export function Store() {
  const [cartCount, setCartCount] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState(1);

  return (
    <div>
      <h2>OLD Number of items in cart: {cartCount}</h2>
      <button onClick={() => setCartCount(cartCount + 1)}>Add to cart</button>
    </div>
  );
}
