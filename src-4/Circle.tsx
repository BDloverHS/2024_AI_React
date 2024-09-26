import { CSSProperties } from "react";

type circleProps = {
  backgroundColor: string;
};

const Circle = (props: circleProps) => {
  const CircleStyle: CSSProperties = {
    width: "100px",
    height: "100px",
    backgroundColor: props.backgroundColor,
    borderRadius: "999px",
  };
  return <div style={CircleStyle}></div>;
};

export default Circle;
