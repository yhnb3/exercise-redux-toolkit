import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../reducer/counterSlice";

import Counter from "./Counter";

export function CounterContainer() {
  const count = useSelector(selectCount);
  return <Counter value1={count.value1} value2={count.value2} />;
}
