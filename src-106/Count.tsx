import { CSSProperties, useState } from "react";

const Count = () => {
  const [num, setNum] = useState(0);

  const UpCount = () => {
    setNum((prev) => prev + 1);
  };

  const DownCount = () => {
    if (num > 0) {
      setNum((prev) => prev - 1);
    } else {
      setNum((prev) => 0);
    }
  };

  return (
    <div>
      <button onClick={DownCount}>-</button>
      <span style={{ backgroundColor: num >= 10 ? "red" : "white" }}>
        {num}
      </span>
      <button onClick={UpCount}>+</button>
    </div>
  );
};

export default Count;
