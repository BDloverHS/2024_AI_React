import { useState } from "react";

const Up = () => {
  const [num, setNum] = useState(0);
  const UpNumber = () => {
    setNum((prev) => prev + 1);
  };
  return <button onClick={UpNumber}>{num}</button>;
};

export default Up;
