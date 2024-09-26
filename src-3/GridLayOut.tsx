import { CSSProperties } from "react";

type GridLayOutProps = {
  repeatNumber: number;
};

const GridLayOut = (props: GridLayOutProps) => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.repeatNumber}, 1fr)`,
    gap: "30px",
  };
  const arr1 = ["Primary", "Hover", "Deactive"];
  const arr2 = ["Hard", "Smooth", "Circle"];

  return (
    <section>
      {/* <QButton backgroundColor="Primary" border="Hard" />
      <QButton backgroundColor="Primary" border="Smooth" />
      <QButton backgroundColor="Primary" border="Circle" />

      <QButton backgroundColor="Hover" border="Hard" />
      <QButton backgroundColor="Hover" border="Smooth" />
      <QButton backgroundColor="Hover" border="Circle" />

      <QButton backgroundColor="Deactive" border="Hard" />
      <QButton backgroundColor="Deactive" border="Smooth" />
      <QButton backgroundColor="Deactive" border="Circle" /> */}
    </section>
  );
};

export default GridLayOut;
