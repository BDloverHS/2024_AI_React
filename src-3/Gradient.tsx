import { CSSProperties } from "react";

type GradientCSS = { backgroundColor: string };

const Gradient = (propt: GradientCSS) => {
  const GradientStyle: CSSProperties = {
    borderRadius: "999px",
    width: "100px",
    height: "100px",
    backgroundColor: propt.backgroundColor,
    margin: "10px",
  };
  return <div style={GradientStyle}></div>;
};

export default Gradient;
