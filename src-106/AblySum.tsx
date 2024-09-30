import Ably, { AblyProps } from "./Ably";

type TotalProps = {
  TotalNum: number;
  TotalPrice: number;
};

const AblySum = (props: AblyProps & TotalProps) => {
  const arr = Array(props.TotalNum)
    .fill(0)
    .map((x, i) => {});

  return (
    <div>
      <Ably name={""} price={0} />
    </div>
  );
};

export default AblySum;
