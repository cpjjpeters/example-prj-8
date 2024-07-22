import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../cartCountSlice";

export function Store() {
  // const [cartCount, setCartCount] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState(1);
  let dispatch = useDispatch();

  return (
    <>
      <div className="product">
        <div className="button-section">
          <button onClick={() => dispatch(increment())}>Add to cart +</button>
          <button onClick={() => dispatch(decrement())}>
            Subtract from to cart -
          </button>
          <input
            onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
          />
          <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
            Add X cart
          </button>
          {/* <h2>Number of items in cart: {cartCount}</h2> */}
        </div>
      </div>
    </>
  );
}
