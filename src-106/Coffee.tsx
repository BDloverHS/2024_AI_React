type CoffeeProps = {
  coffeeName: string;
  coffeeAmount: number;
  click: () => void;
};

const Coffee = (props: CoffeeProps) => {
  return (
    <div>
      <button onClick={props.click}>{props.coffeeName}</button>
      <span> : {props.coffeeAmount}</span>
    </div>
  );
};

export default Coffee;
