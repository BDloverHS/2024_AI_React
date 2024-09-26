import { CSSProperties } from "react";
import Box from "./Box";

const GridBox = () => {
  const GridBoxStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
  };
  return (
    <section style={GridBoxStyle}>
      <Box background="Primary" borderRadius="Hard"></Box>
      <Box background="Primary" borderRadius="Smooth"></Box>
      <Box background="Primary" borderRadius="Circle"></Box>

      <Box background="Hover" borderRadius="Hard"></Box>
      <Box background="Hover" borderRadius="Smooth"></Box>
      <Box background="Hover" borderRadius="Circle"></Box>

      <Box background="Deactive" borderRadius="Hard"></Box>
      <Box background="Deactive" borderRadius="Smooth"></Box>
      <Box background="Deactive" borderRadius="Circle"></Box>
    </section>
  );
};

export default GridBox;
