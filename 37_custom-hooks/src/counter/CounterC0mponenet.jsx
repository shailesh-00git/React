import React from "react";

//React component with the normal hook inside
//and have to reutrn at last and have to use function after setcount setcount(()=>{  // statement  })

function useCounter(initialValue = 0) {
  const [count, setCount] = React.useState(initialValue);

  function increase() {
    setCount((prev) => prev + 1);
  }
  function decrease() {
    setCount((prev) => prev - 1);
  }
  function reset() {
    setCount(() => initialValue);
  }

  return { increase, decrease, reset, count };
}

export default useCounter;
