import { CSSProperties } from "react";

type QButtonCSS = {
  backgroundColor: "Primary" | "Hover" | "Deactive";
  border: "Hard" | "Smooth" | "Circle";
};
const QButton = (props: QButtonCSS) => {
  const backMap = {
    Primary: "#205BF3",
    Hover: "#478DF5",
    Deactive: "#979797",
  };

  const borderMAP = {
    Hard: "0px",
    Smooth: "5px",
    Circle: "999px",
  };
  const QButtonStyle: CSSProperties = {
    backgroundColor: backMap[props.backgroundColor],
    borderRadius: borderMAP[props.border],
    padding: "10px 45px",
    border: "none",
    color: "white",
  };
  return <button style={QButtonStyle}>Button</button>;
};

export default QButton;
