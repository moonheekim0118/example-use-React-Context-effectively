import React from "react";
import { useCount } from "./count-context";

function CountDisplay() {
  const {
    state: { count },
  } = useCount();
  return <div>현재 카운트는! {count}</div>;
}

function Counter() {
  const { dispatch } = useCount();
  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>증가</button>
      <button onClick={() => dispatch({ type: "decrement" })}>감소</button>
    </>
  );
}

export { CountDisplay, Counter };
