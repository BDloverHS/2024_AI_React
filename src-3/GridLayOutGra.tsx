import { CSSProperties } from "react";
import Gradient from "./Gradient";

const GridLayOutGra = (props) => {
  const GridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: "50px",
  };

  return (
    <section style={{ GridStyle }}>
      {["red", "blue", "green", "pink", "skyblue"].map((v) => (
        <Gradient backgroundColor={v} />
      ))}
    </section>
  );
};

export default GridLayOutGra;
