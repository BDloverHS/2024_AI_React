import { useState } from "react";
import Fruit from "./Fruit";

const Test = () => {
  const [fruit, setFruit] = useState({
    apple: { count: 0, price: 1000 },
    banana: { count: 0, price: 1500 },
    orange: { count: 0, price: 2000 },
  });

  const ChangeApple = () => {
    setFruit((prev) => {
      return {
        ...prev,
        apple: { count: prev.apple.count + 1, price: 1000 },
      };
    });
  };

  const ChangeBanana = () => {
    setFruit((prev) => {
      return {
        ...prev,
        banana: {
          count: prev.banana.count + 1,
          price: 1500,
        },
      };
    });
  };

  const ChangeOrange = () => {
    setFruit((prev) => {
      return {
        ...prev,
        orange: {
          count: prev.orange.count + 1,
          price: 2000,
        },
      };
    });
  };

  return (
    <div>
      <Fruit
        fruitName={"사과"}
        fruitAmount={fruit.apple.count}
        click={ChangeApple}
      />

      <Fruit
        fruitName={"바나나"}
        fruitAmount={fruit.banana.count}
        click={ChangeBanana}
      />

      <Fruit
        fruitName={"오렌지"}
        fruitAmount={fruit.orange.count}
        click={ChangeOrange}
      />
      <br />
      <span>
        총 갯수 : {fruit.apple.count + fruit.banana.count + fruit.orange.count}
      </span>
      <br />
      <span>
        총 가격 :{" "}
        {fruit.apple.count * fruit.apple.price +
          fruit.banana.count * fruit.banana.price +
          fruit.orange.count * fruit.orange.price}
      </span>
    </div>
  );
};

export default Test;
