import { CSSProperties } from "react";

type BoxCSS = {
  backgroundColor: "pink" | "orange" | "skyblue" | "red";
  size: "small" | "medium" | "large";
};

const Box = (props: BoxCSS) => {
  const sizeMap = {
    small: "50px",
    medium: "100px",
    large: "200px",
  };
  const BoxStyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    width: sizeMap[props.size],
    height: sizeMap[props.size],
  };

  return <div style={BoxStyle}></div>;
};

export default Box;
