import { CSSProperties, ReactNode } from "react";

type GridLayOutProps = {
  columnNumber: number;
  component: ReactNode;
};

const GridLayOut = (props: GridLayOutProps) => {
  const GridLayOutStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.columnNumber},1fr)`,
    gap: "30px",
  };
  return <section style={GridLayOutStyle}></section>;
};

export default GridLayOut;
