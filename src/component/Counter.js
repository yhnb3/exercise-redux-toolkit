import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../reducer/counterSlice";

export default function Counter({ value1, value2 }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement(1))}>minus</button>
        <span>{value1}</span>
        <button onClick={() => dispatch(increment(1))}>plus</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement(2))}>minus</button>
        <span>{value2}</span>cd
        <button onClick={() => dispatch(increment(2))}>plus</button>
      </div>
    </div>
  );
}
