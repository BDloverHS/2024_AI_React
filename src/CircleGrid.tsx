import { CSSProperties } from "react";
import Circle from "./Circle";

const CircleGrid = () => {
  const CircleGridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "30px",
  };
  return (
    <section style={CircleGridStyle}>
      <Circle backgroundColor="red"></Circle>
      <Circle backgroundColor="orange"></Circle>
      <Circle backgroundColor="yellow"></Circle>
      <Circle backgroundColor="green"></Circle>
    </section>
  );
};

export default CircleGrid;
