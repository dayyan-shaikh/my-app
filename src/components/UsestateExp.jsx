import React, { useState } from "react";
import datas from "./datas.json";

const UsestateExp = () => {
  const [nData, setnData] = useState(datas);
  const handleclick = () => {
    setnData([]);
  };

  const handleremove = (itemId) => {
    setnData(nData.filter(item => item.id !== itemId))
  }
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-3">
      <h1 className="text-3xl">UseState Another Example </h1>
      <ul className="text-xl">
        {nData.map((items) => (
          <li key={items.id}>
            {items.name}
            <br />
            <button
              onClick={() => handleremove(items.id)}
              className="border-4 w-20 text-xl"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleclick} className="border-4 w-20 text-2xl">
        clear
      </button>
    </div>
  );
};

export default UsestateExp;
