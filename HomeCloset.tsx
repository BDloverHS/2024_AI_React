import { CSSProperties } from "react";

type ClosetProps = {
  objectName: string;
  objectAmount: number;
  click1: () => void;
  click2: () => void;
  objectprice: number;
};

const HomeCloset = (props: ClosetProps) => {
  const BoxStyle: CSSProperties = {
    border: "2px solid #eaeaea",
    width: "768px",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "15px 20px",
    borderRadius: "6px",
  };

  const UnderStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  const CountStyle: CSSProperties = {
    width: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const ButtonStyle: CSSProperties = {
    width: "30px",
    height: "30px",
    fontSize: "20px",
    borderRadius: "999px",
    border: "none",
  };

  const PriceStyle: CSSProperties = {
    fontSize: "24px",
  };

  return (
    <div style={BoxStyle}>
      <span>{props.objectName}</span>
      <div style={UnderStyle}>
        <div style={CountStyle}>
          <button style={ButtonStyle} onClick={props.click1}>
            -
          </button>
          <span>{props.objectAmount}</span>
          <button style={ButtonStyle} onClick={props.click2}>
            +
          </button>
        </div>
        <span style={PriceStyle}>{props.objectprice}</span>
      </div>
    </div>
  );
};

export default HomeCloset;
