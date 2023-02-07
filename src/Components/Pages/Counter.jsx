import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Redux/dataSlice";

export const Counter = () => {
  const count = useSelector((state) => state.data.value);
  const dispatch = useDispatch();

  return (
    <div>
      Counter
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
