import { useState } from "react";
import Coffee from "./Coffee";

const Cafe = () => {
  const [coffee, setCoffee] = useState({
    americano: { amount: 0, price: 2000 },
    latte: { amount: 0, price: 3000 },
    ade: { amount: 0, price: 3500 },
  });

  const ChangeAme = () => {
    setCoffee((prev) => {
      return {
        ...prev,
        americano: { amount: prev.americano.amount + 1, price: 2000 },
      };
    });
  };

  const ChangeLatte = () => {
    setCoffee((prev) => {
      return {
        ...prev,
        latte: {
          amount: prev.latte.amount + 1,
          price: 3000,
        },
      };
    });
  };

  const ChangeAde = () => {
    setCoffee((prev) => {
      return {
        ...prev,
        ade: { amount: prev.ade.amount + 1, price: 3500 },
      };
    });
  };

  return (
    <div>
      <Coffee
        coffeeName={"아메리카노"}
        coffeeAmount={coffee.americano.amount}
        click={ChangeAme}
      />
      <br />
      <Coffee
        coffeeName={"라떼"}
        coffeeAmount={coffee.latte.amount}
        click={ChangeLatte}
      />
      <br />
      <Coffee
        coffeeName={"에이드"}
        coffeeAmount={coffee.ade.amount}
        click={ChangeAde}
      />
      <br />
      <span>
        총 갯수 :{" "}
        {coffee.americano.amount + coffee.latte.amount + coffee.ade.amount}
      </span>
      <br />
      <span>
        총 가격 :{" "}
        {coffee.americano.amount * coffee.americano.price +
          coffee.latte.amount * coffee.latte.price +
          coffee.ade.amount * coffee.ade.price}
      </span>
    </div>
  );
};

export default Cafe;
