import { CSSProperties } from "react";

type BoxBack = { background: "Primary" | "Hover" | "Deactive" };
type BoxBorder = { borderRadius: "Hard" | "Smooth" | "Circle" };

type BoxCSS = BoxBack & BoxBorder;
const Box = (props: BoxCSS) => {
  const BoxBackground = {
    Primary: "red",
    Hover: "blue",
    Deactive: "yellow",
  };

  const BoxBorderRadius = {
    Hard: "0px",
    Smooth: "6px",
    Circle: "24px",
  };

  const BoxStyle: CSSProperties = {
    backgroundColor: BoxBackground[props.background],
    borderRadius: BoxBorderRadius[props.borderRadius],
    padding: "20px 10px",
    border: "none",
    margin: "10px",
  };
  return <button style={BoxStyle}>Button</button>;
};

export default Box;
