import { CSSProperties } from "react";

export type PositionProps = {
  positionImg: "TOP" | "BOTTOM" | "MID" | "JUNG" | "SUP";
};

const Position = (props: PositionProps) => {
  const PositionMap = {
    TOP: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-top.svg?v=1724034092925",
    BOTTOM:
      "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-bot.svg?v=1724034092925",
    MID: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-mid.svg?v=1724034092925",
    JUNG: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-jng.svg?v=1724034092925",
    SUP: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-sup.svg?v=1724034092925",
  };

  const PositionStyle: CSSProperties = {
    width: "24px",
    height: "24px",
    alignContent: "center",
  };
  return (
    <div style={{ alignContent: "center" }}>
      <img src={PositionMap[props.positionImg]} style={PositionStyle} />
    </div>
  );
};

export default Position;
