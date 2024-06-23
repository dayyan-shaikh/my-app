import React, { useState } from "react";

const Usestate = () => {
  const [count, setcount] = useState(0);
  const addclick = () => {
    setcount(count + 1);
  };
  const subtractclick = () => {
    setcount(count - 1);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl">Usestate</h1>
      <h1 className="text-3xl">{count}</h1>
      <button onClick={addclick} className="text-3xl border-4 w-24">
        +
      </button>
      <button onClick={subtractclick} className="text-3xl border-4 w-24">
        -
      </button>
    </div>
  );
};

export default Usestate;
