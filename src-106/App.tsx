import { useState } from "react";
import Ably from "./Ably";
import Button from "./Button";
import Count from "./Count";
import Up from "./Up";
import Test from "./Test";
import Fruit from "./Fruit";
import Cafe from "./Cafe";

function App() {
  const [total, setTotal] = useState(1);

  return (
    <div>
      <Button />
      <Up />
      <Count />

      <Ably name={"아이보리 / FREE"} price={12500} />

      <Ably name={"네이비 / FREE"} price={20000} />

      <Ably name={"블랙 / FREE"} price={25000} />

      <div>총 갯수 : {total}</div>
      <div style={{ width: "1px", height: "100px" }}></div>
      <Test />

      <div style={{ width: "1px", height: "100px" }}></div>
      <Cafe />
    </div>
  );
}

export default App;
