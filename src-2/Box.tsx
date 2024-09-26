import { CSSProperties } from "react";

type Style = {
  width: string;
  height: string;
  backgroundColor: string;
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
