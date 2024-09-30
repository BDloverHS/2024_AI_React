import { CSSProperties, useState } from "react";

export type AblyProps = {
  name: string;
  price: number;
  // change: number;
};

const Ably = (props: AblyProps) => {
  const [num, setNum] = useState(1);

  const UpObject = () => {
    setNum((prev) => prev + 1);
  };

  const DownObject = () => {
    setNum((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const ContainerStyle: CSSProperties = {
    width: "768px",
    border: "1px solid grey",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    padding: "5px 5px",
    margin: "50px 0px",
  };

  const NameStyle: CSSProperties = {
    fontSize: "20px",
  };

  const ButtonStyle: CSSProperties = {
    borderRadius: "999px",
    border: "none",
    alignItems: "center",
    width: "30px",
    height: "30px",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const UnderStyle: CSSProperties = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <div style={ContainerStyle}>
      <div>
        <span style={NameStyle}>{props.name}</span>
      </div>

      <div style={UnderStyle}>
        <div>
          <button onClick={DownObject} style={ButtonStyle}>
            -
          </button>
          <span>{num}</span>
          <button onClick={UpObject} style={ButtonStyle}>
            +
          </button>
        </div>
        <span style={{ fontSize: "25px" }}>{props.price * num}</span>
      </div>
    </div>
  );
};

export default Ably;
