import { CSSProperties } from "react";

type Style = {
  backgroundColor: "red" | "blue" | "orange" | "green";
  width: string;
  height: string;
};

const Box = (propt: Style) => {
  const CssStyle: CSSProperties = {
    width: propt.width,
    height: propt.height,
    backgroundColor: propt.backgroundColor,
  };

  return <div style={CssStyle}>{propt.backgroundColor}</div>;
};

export default Box;
